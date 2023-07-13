import React from "react";
import Card from "react-bootstrap/Card";
import { ImItalic, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sajal Sinha </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am a Machine Learning Engineer with expertise in Computer Vision, NLP and Analytics,
            I also help startups to develop their <b className="purple"> <strong>AI products</strong></b>
            <br />
            <br />
            <p>Within these positions, I have successfully developed Computer Vision models capable of <b className="purple"><i>detecting objects</i></b> across more than 100 classes, performing  <b className="purple"><i>image segmentation</i></b>, <b className="purple"><i>crowd counting</i></b>, <b className="purple"><i>object tracking</i></b>, and <b className="purple"><i>synthetic data generation</i></b>. My contributions to the field of NLP include building a <b className="purple"><i>Personality detection Model</i></b>, a topic-specific <b className="purple"><i>chatbot </i></b>(fine-tuned on GPT-3) ,<b className="purple"><i> Sentiment Analysis </i></b> using BERT,<b className="purple"><i> Aspect Based  </i></b>Sentiment Analysis,<b className="purple"><i> Resume Translation </i></b>using Mbart and <b className="purple"><i>Transliteration </i></b>utilizing Seq2Seq.<br /><br /> <i>Apart for these, I've also done fine-tuning & prompt tuning prompt tuning/fine-tuning GPTs, using langchain - for Customer Experience, Customer Service, Personal Assistants, Resume Parsing & Ranking, SEOs etc</i></p>
            Apart from ML, my interest lies in
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> History
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

         
         <br>
         </br>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
