import { HomeworkModel } from "../../models/homework";
import { createLink } from "../../utils/functions";
import Table from "./application/hw2/Table";
import RandomVariates from "./application/hw2/RandomVariates";

const question1 = <>
  Choose 3 variables from our surveys: <br />
  <ul className='list-disc ml-10'>
    <li>one Qualitative</li>
    <li>one Quantitative discrete</li>
    <li>one Quantitative continuous</li>
  </ul>
  <br />
  Create the most efficient algorithms to compute the frequency (absolute/relative/percentage) distribution of:<br />
  <ul className='list-disc ml-10'>
    <li>the 3 variables</li>
    <li>the joint distribution of 2 variables (use a general logic, where variables could be any number)</li>
  </ul>
</>

const question2 = <>
  For the following most important data structures (or others that you may want to suggest) find out how to:<br />
  <ul className='list-disc ml-10'>
    <li>loop (break/continue)</li>
    <li>add/remove/get/set/check the existence of key/value</li>
  </ul>
  <br />
  <span className='font-semibold'>Data structures</span>:
  array, list, dictionary, sorted list, hashset, sortedset, queue, stack, linkedlist
  <br /><br />
  Note in a very concise way your finding in your Js Cheatsheet, and, in case a corresponding Js object does not exists, create a simple equivalent class.
</>

const data: HomeworkModel = {
  title: 'Homework 2 - 15/10/2023',
  theories: [
    {
      question: question1,
      answer: <Table />
    },
    {
      question: question2,
      answer: <>The cheatsheet is accessible through this {createLink('link', 'https://gitlab.com/homeworks2282541/homework-2/cheatsheet')}.</>
    },
    {
      question: 'Generate N uniform random variates in [0,1) and determine the distribution into class intervals [i/k, (i+1)/k), i = 0,..., k-1.'
        + 'Play with N and k values and draw some conclusion on the "shape" of the distribution.',
      answer: <RandomVariates />
    }
  ],
  applications: []
}

export default data;