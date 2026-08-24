<!--
id: embedded-systems-11
note: engineering-embedded-systems
title: "Compute an ADC Step"
exam: exam-i
skills: [ADC, Quantization]
-->

What is the ideal voltage step of a 10-bit ADC with a $5\ \mathrm V$ reference?

:::solution
$$
q=\frac{V_{ref}}{2^N}=\frac{5}{2^{10}}=0.00488\ \mathrm V\approx4.88\ \mathrm{mV}.
$$
:::

<!--
id: embedded-systems-12
note: engineering-embedded-systems
title: "Choose a Sampling Rate"
exam: exam-i
skills: [Sampling, Nyquist]
-->

A sensor contains useful content up to $100\ \mathrm{Hz}$. What is the minimum ideal sampling-rate condition to avoid aliasing?

:::solution
$$
f_s>2f_{max}=2(100)=200\ \mathrm{Hz}.
$$

Practical designs usually sample faster to allow an anti-alias filter transition band and timing margin.
:::

<!--
id: embedded-systems-13
note: engineering-embedded-systems
title: "Calculate PWM Average"
exam: exam-i
skills: [PWM, Duty cycle]
-->

An ideal $0$-to-$12\ \mathrm V$ PWM signal has duty cycle $25\%$ and drives a sufficiently slow resistive load. What is its average voltage?

:::solution
$$
V_{avg}=DV=0.25(12)=3\ \mathrm V.
$$
:::

<!--
id: embedded-systems-14
note: engineering-embedded-systems
title: "Find a Timer Period"
exam: exam-i
skills: [Timers, Clocking]
-->

A timer clock is $1\ \mathrm{MHz}$, the prescaler is $10$, and $ARR=999$. Find the timer period.

:::solution
$$
T=\frac{p(ARR+1)}{f_{clk}}=\frac{10(1000)}{1{,}000{,}000}=0.010\ \mathrm s=10\ \mathrm{ms}.
$$
:::

<!--
id: embedded-systems-15
note: engineering-embedded-systems
title: "Estimate Task Utilization"
exam: exam-i
skills: [Real-time systems, Scheduling]
-->

A task executes for $0.5\ \mathrm{ms}$ every $5\ \mathrm{ms}$. What is its utilization?

:::solution
$$
U=\frac{C}{T}=\frac{0.5}{5}=0.10.
$$

The task uses an estimated $10\%$ of the processor before accounting for interrupts, scheduling overhead, blocking, and other tasks.
:::

<!--
id: embedded-systems-16
note: engineering-embedded-systems
title: "Distinguish Volatile from Atomic"
exam: exam-i
skills: [Interrupts, Concurrency]
-->

Why is declaring a shared variable `volatile` not enough to make an increment safe between an ISR and foreground code?

:::solution
`volatile` prevents the compiler from assuming that the value is unchanged between accesses. It does not make a read-modify-write increment atomic. The ISR can occur between the read and write, so use an atomic operation, a protected critical section, or a suitable synchronization design.
:::

<!--
id: embedded-systems-17
note: engineering-embedded-systems
title: "Select a Protocol Property"
exam: exam-i
skills: [Communication protocols, UART]
-->

Does UART by itself define message boundaries and guarantee that a received message is valid?

:::solution
No. UART defines electrical signaling and an asynchronous character frame, but an application must add message framing, length or terminators, timeout rules, and an integrity check such as a checksum or CRC.
:::

<!--
id: embedded-systems-18
note: engineering-embedded-systems
title: "Identify a Useful Test"
exam: exam-i
skills: [Embedded testing, Fault injection]
-->

Give one fault-injection test for a temperature controller and state the expected safe response.

:::solution
Disconnect or substitute an out-of-range temperature sensor. The firmware should detect the invalid signal, record a diagnostic, and move the heater or actuator to its specified safe state rather than continuing with an untrusted measurement.
:::
