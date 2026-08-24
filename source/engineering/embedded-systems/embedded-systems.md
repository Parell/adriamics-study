# Embedded Systems

## Requirements and system boundaries

Begin with measurable requirements:

- What inputs must be measured, and over what range?
- What output must be controlled, and with what accuracy?
- What are the sampling rate, deadline, startup, shutdown, and fault-response requirements?
- What power, memory, processor, temperature, vibration, and environmental limits apply?
- Which failures must be detected, contained, or made safe?

Separate the system into hardware, firmware, and external plant. Define interfaces between them. A sensor specification should state range, sensitivity, offset, bandwidth, noise, supply, loading, and failure behavior. A firmware specification should state units, timing, valid ranges, state transitions, and diagnostic behavior.

Do not hide assumptions in code. Record whether a value is signed, its scale, its valid range, its update period, and what should happen if it is missing or out of range.

## Signal conditioning

Sensors rarely produce a clean, correctly scaled ADC voltage. Signal conditioning adapts the sensor to the measurement input and protects both sides.

### Scaling and buffering

For a linear sensor,

$$
y=ax+b,
$$

where $x$ is the physical quantity and $y$ is sensor output. A two-resistor divider produces

$$
V_{out}=V_{in}\frac{R_2}{R_1+R_2}.
$$

The divider is not ideal when the ADC or next circuit draws current. Treat the load as part of the circuit or buffer the signal with an amplifier. An op-amp buffer presents high input impedance and low output impedance, but its input range, output swing, offset, bandwidth, stability, and supply limits still matter.

### Filtering and protection

A first-order low-pass filter has

$$
H(s)=\frac{1}{1+sRC},\qquad f_c=\frac{1}{2\pi RC}.
$$

It attenuates high-frequency noise but adds delay and limits useful signal bandwidth. Choose $f_c$ above the highest signal frequency of interest and below frequencies that would alias into the sampled band.

Protection may include series impedance, current limiting, clamps, transient suppressors, fuses, and input filtering. Check leakage and capacitance because a protection component can change sensor accuracy or ADC settling time. Use galvanic isolation when ground potentials, hazardous voltages, long cables, or safety boundaries make a direct connection unsafe.

### ADC input requirements

For an $N$-bit ADC with reference $V_{ref}$, the nominal voltage step is

$$
q=\frac{V_{ref}}{2^N}.
$$

This is the ideal spacing between adjacent code transitions for a unipolar ADC whose input range is $0$ to $V_{ref}$. It is not the exact endpoint mapping: an ideal converter has $2^N$ codes, from $0$ through $2^N-1$, and the highest code represents the top interval below the reference. Use the data sheet when the converter uses a different range, offset binary, differential inputs, calibration, or a different full-scale definition.

The code for an input in range is approximately

$$
\text{code}=\left\lfloor\frac{V_{in}}{V_{ref}}(2^N-1)\right\rfloor.
$$

This idealized mapping assumes $0\le V_{in}<V_{ref}$. Clamp or reject out-of-range inputs rather than relying on an integer conversion to make them safe.

Real accuracy is limited by reference error, offset, gain error, integral nonlinearity, noise, source impedance, acquisition time, and layout. A switched-capacitor ADC input may need a low-impedance driver or an explicit settling interval after a channel change.

## Microcontroller architecture

A microcontroller integrates a processor core, memory, clock system, buses, and peripherals on one device. Flash or other nonvolatile memory stores program code; SRAM stores runtime data; nonvolatile data memory may store configuration or calibration. Stack space holds call state and automatic variables. Heap allocation is often avoided in small real-time systems because fragmentation and unbounded allocation time are difficult to control.

Memory-mapped peripherals appear at defined addresses. A register may contain data, status flags, configuration bits, or write-one-to-clear events. Read-modify-write operations must be used carefully when hardware or another execution context can change the same register.

Clock frequency affects instruction time, baud-rate divisors, timer resolution, power, and electromagnetic emissions. Startup normally includes reset release, clock initialization, memory initialization, stack setup, peripheral configuration, and application entry. Brownout, watchdog expiry, invalid clock startup, and unexpected reset should leave the system in a known safe state.

Track CPU utilization, RAM, nonvolatile storage, peripheral channels, interrupt load, stack depth, power, and thermal limits. A design that works in a nominal bench test may fail when logging, communications, diagnostics, and worst-case sensor processing occur together.

## GPIO, timers, ADC, and PWM

GPIO pins can be configured as inputs or outputs with push-pull, open-drain, pull-up, or pull-down behavior. Check voltage thresholds, drive current, sink/source asymmetry, boot defaults, alternate functions, and whether an external circuit can drive a pin during reset. Mechanical switches bounce; use hardware or software debouncing.

A timer with clock frequency $f_{clk}$, prescaler $p$, and period register $ARR$ has approximate period

$$
T=\frac{p(ARR+1)}{f_{clk}}.
$$

Timers can generate periodic interrupts, capture event times, compare output transitions, measure pulse widths, and trigger ADC conversions. Hardware triggering is usually more repeatable than starting conversions from software instructions.

For a signal with highest meaningful frequency $f_{max}$, ideal sampling requires

$$
f_s>2f_{max}.
$$

In practice, sample faster to provide filter transition bandwidth, timing margin, and improved control response. Synchronize sampling with PWM when switching noise would otherwise contaminate measurements.

For a PWM signal with period $T$, high time $t_h$, and duty cycle $D$,

$$
D=\frac{t_h}{T}.
$$

For a suitable low-pass load, the average of a $0$-to-$V$ waveform is approximately $DV$. Motor inductance, switching frequency, dead time, transistor losses, current ripple, and load dynamics determine whether this approximation is valid. Use a driver stage and flyback path where required; do not drive power loads directly from MCU pins.

## Interrupts and concurrency

An interrupt transfers execution to a handler in response to an event such as a timer match, received byte, ADC completion, external edge, or fault. Interrupt latency includes hardware recognition, instruction completion, prioritization, context entry, and any masking.

An interrupt service routine should be short, deterministic, and safe. It commonly records a timestamp, clears the event, copies a small datum, and signals foreground code. Long calculations, blocking calls, dynamic allocation, and uncontrolled logging inside an ISR create jitter and priority problems.

Shared data needs a concurrency plan. A naturally aligned flag may be atomic on one MCU, but a multi-byte value, read-modify-write sequence, or shared ring-buffer index may not be. Use atomic operations, critical sections, lock-free protocols appropriate to the hardware, or an RTOS synchronization primitive. `volatile` tells the compiler that a value can change outside ordinary control flow; it does not make a compound operation atomic or provide mutual exclusion.

For a serial receive path, a ring buffer decouples byte arrival from message parsing. Define overflow behavior explicitly: drop newest, drop oldest, signal a fault, or apply backpressure.

## Communication protocols

Every protocol design should define electrical levels, framing, byte order, clocking, addressing, maximum message size, timeout, retry, integrity check, and recovery from malformed data.

**UART** is asynchronous point-to-point communication. A frame commonly includes a start bit, data bits, optional parity, and stop bit. UART has no inherent message boundary or delivery guarantee; add framing, length, checksum or CRC, and timeout at the application layer.

**SPI** is synchronous and usually uses clock, data-out, data-in, and chip-select signals. Specify clock polarity, clock phase, bit order, maximum frequency, chip-select timing, and response latency for each device. Multiple slaves need separate chip-select management and careful bus contention control.

**I2C** uses open-drain clock and data lines with pull-up resistors. Rise time depends on pull-up resistance and total bus capacitance. Handle acknowledgements, arbitration, clock stretching, stuck-bus recovery, and address conflicts.

**CAN** is a multi-master differential bus with message arbitration, error detection, and fault confinement. Correct termination, bit timing, transceiver common-mode range, bus loading, message priority, and bus-off recovery are system responsibilities.

A checksum may detect simple errors; a CRC is generally stronger for burst errors. Neither proves that a packet is fresh, authorized, or semantically valid. Validate ranges and units, and treat malformed or stale messages as faults rather than commands.

## Real-time constraints

A real-time system is judged partly by when it produces a result. A deadline is the latest acceptable completion time. Periodic tasks have period $T_i$ and execution time $C_i$. A first utilization estimate is

$$
U=\sum_i\frac{C_i}{T_i}.
$$

Utilization below 1 is necessary for many simple schedules but is not sufficient: blocking, release jitter, interrupt work, nonpreemptive sections, deadline differences, and overload behavior also matter.

Worst-case execution time (WCET) is an upper bound under specified hardware and software conditions. Measure representative paths, inspect generated code, bound loops and retries, and include cache, bus, interrupt, and communication effects where applicable. Average execution time is not a deadline guarantee.

Rate-monotonic scheduling assigns higher priority to tasks with shorter periods. It is useful intuition for fixed-priority systems, but actual schedulability must account for priorities, blocking, deadlines, and overhead. Define what happens when a task overruns: skip a cycle, finish late, shed optional work, enter degraded mode, or fail safe.

Use a monotonic time base for elapsed intervals. Avoid comparing wall-clock timestamps with equality, and account for counter wraparound using unsigned modular arithmetic. A watchdog should detect loss of progress, not merely reset a healthy system that has a long but valid operation.

## Embedded software testing

Testing must connect requirements to evidence.

- **Unit tests** exercise functions with normal, boundary, invalid, overflow, and fault inputs.
- **Integration tests** verify drivers, tasks, interrupts, and communication together.
- **Hardware-in-the-loop tests** connect real firmware to simulated or controlled plant behavior.
- **Fault injection** tests missing sensors, stuck bits, bad CRCs, resets, timing overruns, low voltage, and communication loss.
- **Logging and tracing** expose state transitions, timing, counters, and fault causes without changing critical timing.
- **Requirements traceability** maps each requirement to implementation, test, result, and open issue.

Test the boundaries between domains: ADC scaling into control logic, timer events into ISR state, packet fields into physical units, and fault detection into actuator shutdown. Record firmware version, hardware revision, calibration, and test conditions.

## Worked example: sampling and PWM timing

A controller measures a temperature signal whose useful bandwidth is at most $20\ \mathrm{Hz}$. It uses a $12$-bit ADC with $V_{ref}=3.3\ \mathrm V$, samples at $200\ \mathrm{Hz}$, and drives a PWM output at $10\ \mathrm{kHz}$. Find the ideal ADC step, the minimum ideal Nyquist rate, and the PWM period.

The ADC step is

$$
q=\frac{3.3}{2^{12}}=0.000806\ \mathrm V\approx0.806\ \mathrm{mV}.
$$

The minimum ideal sampling rate is

$$
f_s>2f_{max}=40\ \mathrm{Hz}.
$$

The selected $200\ \mathrm{Hz}$ rate provides room for a practical anti-alias filter, though it does not by itself prove adequate control performance. The PWM period is

$$
T_{PWM}=\frac{1}{10000}=100\ \mu\mathrm{s}.
$$

Synchronize ADC acquisition away from switching transients, verify ADC settling and reference accuracy, and test worst-case execution time within the $5\ \mathrm{ms}$ sampling period.

## Common mistakes

- Treating ADC resolution as total measurement accuracy.
- Forgetting sensor loading, ADC acquisition time, reference error, or protection leakage.
- Assuming a timer period is exact without checking clock source and prescaler limits.
- Using `volatile` as a substitute for atomicity or synchronization.
- Performing blocking work inside an ISR.
- Omitting framing, timeout, integrity checks, or malformed-packet handling.
- Treating average task utilization as proof of real-time schedulability.
- Testing only nominal inputs and never injecting resets, noise, timing overruns, or communication faults.
- Driving inductive or high-current loads directly from MCU pins.
- Failing to define startup, brownout, watchdog, and degraded-mode behavior.

## Design checklist

1. Every input and output has a range, unit, update rate, and fault response.
2. Signal conditioning meets bandwidth, noise, loading, protection, and isolation requirements.
3. Memory, CPU, stack, power, clock, and thermal budgets include worst-case margins.
4. Timers, ADC triggers, PWM, interrupts, and communication deadlines are deterministic enough for the application.
5. Shared data and task interactions have an explicit concurrency design.
6. Protocols define framing, integrity, timeout, retry, priority, and recovery behavior.
7. Safety-related outputs fail to a known state on reset, watchdog, brownout, and detected sensor faults.
8. Unit, integration, hardware-in-loop, fault-injection, and regression evidence is traceable to requirements.

## Sources

- Valvano, *Embedded Systems: Introduction to ARM Cortex-M Microcontrollers*
- Barr and Massa, *Programming Embedded Systems*
- Axelson, *Serial Port Complete*
- Fraden, *Handbook of Modern Sensors*
- [Engineering LibreTexts](https://eng.libretexts.org/)

An embedded system is a computing system built into a larger product to sense, decide, communicate, and control. It combines hardware, firmware, electronics, timing, and physical constraints. Unlike a general-purpose computer, it usually has a defined function, limited resources, and an explicit relationship with the real world.

The central signal path is

$$
\text{physical variable}
\rightarrow \text{sensor}
\rightarrow \text{signal conditioning}
\rightarrow \text{ADC}
\rightarrow \text{firmware}
\rightarrow \text{PWM/DAC/communication}
\rightarrow \text{actuator or system}
$$

This note assumes basic circuit analysis, binary numbers, programming, and algebra. It focuses on design reasoning rather than one particular microcontroller family.
