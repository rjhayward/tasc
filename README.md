Source code for the TASC robotics paper.

Abstract:
We present TASC: Termination Action Skill Chaining, a method for pure imitation learning of complex sequential long-horizon tasks, requiring only simple sub-task annotations and no environmental reward. We define a new termination action dimension to allow each sub-task’s termination function to be learned jointly with its policy, giving it the ability to end its sub-task. These policies are trained in parallel on segments of the demonstration, and then chained together at inference time, providing a massive speed-up over sequential training. We evaluate TASC on three complex robotic manipulation tasks and show improved success rates compared to state of the art methods.
