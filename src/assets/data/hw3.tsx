import { HomeworkModel } from "../../models/homework";
import { createLink } from "../../utils/functions";

const question1 = <div className="font-normal px-5 text-justify">
  <strong>Part a</strong><br />
  M systems are subject to a series of N attacks. On the x-axis, we indicate the attacks and on the Y-axis we
  simulate the accumulation of a "security score" (-1, 1), where the score is -1 if the system is penetrated
  and 1 if the system was successfully "shielded" or protected. Simulate the score "trajectories" for all systems,
  assuming, for simplicity, a constant penetration probability p at each attack.<br /><br />

  <strong>Part b</strong><br />
  Same as before, but simulate the cumulated frequency, say f, of penetration. Do the same with the relative
  frequency f/number of attacks and the "normalized" ratio: f/ √number of attacks.<br /><br />


  For any of the above 4 charts (which will be actually an instance of a <strong>unique "object"</strong>, from a coder's point of view), plot
  a vertical histogram at some point x (day or attack number, user parameter) and at the last abscissa
  value and make your personal considerations on the shape of the distributions.<br />
  Make sure that each animation is enclosed into a "frame" (a rectangle) resizable by the user, by using the mouse
  (you can make a separate, reusable, "ResizableRectangle" object for that).<br /><br />

  <strong>Discussion point:</strong><br />
  Is what you see what you expected? What about the averages of the distributions and the shapes of the histograms:<br />
  <div className="pl-4">do you see regularities, differences and can you attempt to explain what you see or guessing what are
    the "theoretical" limit distribution, when as N increases, and you can make the distribution simulation "more detailed" by increasing M ?</div><br />
  <strong>Hints and details for exercise 1</strong><br />

  For simplicity, all the charts should be done using essentially <strong>the same "chart object"</strong> (just suitably parameterized to the various variations
  you want to use). In fact, from the code point of view, you will readily see that all the parts of exercise 1, and even the optional parts, are essentially
  a <strong>"unique exercise"</strong> with minor variations which you can easily accommodate in your code. In other words, once implemented, you can manage all the cases
  with the same few reusable objects. And these few classes (of objects) will also be reusable for future homeworks or projects.
  For simplicity, I would suggest to create first the histogram object and the resizable rectangle object as separate objects and use them as accessories of the chart object.
</div>

const question2 = <span className="font-normal text-justify">
  Recall briefly the definition and math notions relevant to "probability space" and make some simple examples, indicating among the triple of the space the meaning of each element in your particular example.
  If you wanted to model probabilistically the homework Exercise 1, explain what are the 3 sets of your probability space and their elements, in this case.
</span>

const data: HomeworkModel = {
  title: 'Homework 3 - 23/10/2023',
  theories: [
    {
      question: question1,
      answer: ""
    },
    {
      question: question2,
      answer: ""
    },
  ],
  applications: []
}

export default data;