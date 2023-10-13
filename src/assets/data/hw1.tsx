import { HomeworkModel } from "../../models/homework";
import CSharp from "./application/hw1/CSharp";
import CanvasHw1 from "./application/hw1/Canvas";

const data: HomeworkModel = {
  "title": "Homework 1 - 05/10/2023",
  "theories": [
    {
      "question": "What is statistics and its relationship with other disciplines? Difference between descriptive and inferential statistics.",
      "answer": "<kw>Statistics</kw> is the science of collecting, organizing, analyzing, and interpreting data to make decisions. Statistics has many applications in various fields, like engineering, business, medicine, education, and more.<br/ ><kw>Descriptive statistics</kw> gives information about raw data which describes the data in some manner. It helps in organizing, analyzing, and to present data in a meaningful manner. It is used to describe a situation. <br /><kw>Inferential statistics</kw> makes inferences about the population using data drawn from the population. It allows us to compare data, and make hypotheses and predictions. It is used to explain the chance of occurrence of an event.",
      "refs": [
        {
          "name": "GeeksForGeeks",
          "href": "https://www.geeksforgeeks.org/difference-between-descriptive-and-inferential-statistics/"
        }
      ]
    },
    {
      "question": "Describe the concepts of Population, Sample Attribute, Variable, Level of measurement and Dataset.",
      "answer": "A <kw>population</kw> is the entire group that you want to draw conclusions about. For example, all registered voters in a county, or all members of a union.<br/>A <kw>sample attribute</kw> is a characteristic or feature of an individual or an object in a specific group where the data is collected from. For example, if a sample has 100 randomly selected voters from a county, then their gender, ethnicity, age, and political preference are sample attributes.<br/>A <kw>variable</kw> is an attribute that can take on different values across your data set. For example, test scores, income, temperature, etc.<br/>A <kw>level of measurement</kw> is a classification that tells you how precisely variables are recorded. There are 4 levels of measurement: nominal, ordinal, interval, and ratio.<br/><kw>Nominal</kw>: the data can only be categorized. For example, city of birth, car brands, marital status.<br/><kw>Ordinal</kw>: the data can be categorized and ranked. For example, language ability, Likert-type questions, top 5 Olympic medallists.<br/><kw>Interval</kw>: the data can be categorized, ranked, and evenly spaced. For example, test scores, personality inventories, temperature in Fahrenheit or Celsius.<br/><kw>Ratio</kw>: the data can be categorized, ranked, evenly spaced, and has a natural zero. For example, height, weight, distance, time.<br/>A <kw>dataset</kw> is a collection of data that is organized in a structured or tabular format. Each row in a dataset represents an individual or an object, and each column represents an attribute or a variable.",
      "refs": [
        {
          "name": "Levels of measurements",
          "href": "https://www.scribbr.com/statistics/levels-of-measurement/"
        },
        {
          "name": "Populations, samples parameters and statistics",
          "href": "https://www.cliffsnotes.com/study-guides/statistics/sampling/populations-samples-parameters-and-statistics"
        },
        {
          "name": "Population vs sample",
          "href": "https://www.scribbr.com/methodology/population-vs-sample/"
        }
      ]
    },
    {
      "question": "Briefly describe the main sampling methods.",
      "answer": "When a research is being conducted about a group of objects, it's rarely possible to collect data from every element in that group. Instead, a sample is being selected. The sample is the group of objects who will actually participate in the research.<br/>To draw valid conclusions from the results, it should be decided how a sample is selected that is representative of the group as a whole. This is called a <kw>sampling method</kw>. There are two primary types of sampling methods that can be used in a research:<br/><kw>Probability sampling</kw> involves random selection, that allows to make strong statistical inferences about the whole group.<br/><kw>Non-probability sampling</kw> involves non-random selection based on convenience or other criteria, that allows to easily collect data.",
      "refs": [
        {
          "name": "Sampling method",
          "href": "https://www.scribbr.com/methodology/sampling-methods/"
        }
      ]
    },
    {
      "question": "Briefly describe the main experiment designs.",
      "answer": "Here are the different experimental design:<br /><kw>Completely Randomized Design</kw>. In this design, participants are randomly assigned to one of two or more groups, and each group is exposed to a different treatment or condition.<br /><kw>Randomized Block Design</kw>. This design involves dividing participants into blocks based on a specific characteristic, such as age or gender, and then randomly assigning participants within each block to one of two or more treatment groups.<br/><kw>Factorial Design</kw>. In a factorial design, participants are randomly assigned to one of several groups, each of which receives a different combination of two or more independent variables.<br />"
        + "<kw>Repeated Measures Design</kw>. In this design, each participant is exposed to all of the different treatments or conditions, either in a random order or in a predetermined order.<br />"
        + "<kw>Crossover Design</kw>. This design involves randomly assigning participants to one of two or more treatment groups, with each group receiving one treatment during the first phase of the study and then switching to a different treatment during the second phase.",
      "refs": [
        {
          "name": "Research Method",
          "href": "https://researchmethod.net/experimental-design/"
        }
      ]
    }
  ],
  "applications": [
    {
      "question": "Write a program in C# or VB.NET that creates a window containing a single line, point, circle, rectangle.",
      answer: <CSharp />,
    },
    {
      "question": "Write a program in JavaScript or TypeScript that creates a window containing a single line, point, circle, rectangle.",
      answer: <CanvasHw1 />,
      "image": []
    }
  ]
}

export default data;