import React from "react";
import StickyDiv from "./components/StickyDiv";

function App() {
  const data = [
    {
      header: {title: "header #01"},
      contents: [
        "content #1-01",
        "content #1-02",
        "content #1-03",
        "content #1-04",
        "content #1-05",
        "content #1-06",
      ]
    },
    {
      header: {title: "header #02"},
      contents: [
        "content #2-01",
        "content #2-02",
        "content #2-03",
        "content #2-04",
        "content #2-05",
        "content #2-06",
        "content #2-07",
        "content #2-08",
        "content #2-09",
        "content #2-10",
        "content #2-11",
        "content #2-12",
        "content #2-13",
        "content #2-14",
        "content #2-15",
        "content #2-16",
        "content #2-17",
      ]
    },
    {
      header: {title: "header #03"},
      contents: [
        "content #3-01",
        "content #3-02",
        "content #3-03",
        "content #3-04",
        "content #3-05",
        "content #3-06",
        "content #3-07",
        "content #3-08",
        "content #3-09",
        "content #3-10",
        "content #3-11",
        "content #3-12",
        "content #3-13",
        "content #3-14",
        "content #3-15",
        "content #3-16",
        "content #3-17",
      ]
    },
    {
      header: {title: "header #04"},
      contents: [
        "content #4-01",
        "content #4-02",
        "content #4-03",
        "content #4-04",
        "content #4-05",
        "content #4-06",
        "content #4-07",
        "content #4-08",
        "content #4-09",
        "content #4-10",
        "content #4-11",
        "content #4-12",
        "content #4-13",
        "content #4-14",
        "content #4-15",
        "content #4-16",
        "content #4-17",
      ]
    }
  ];

  return (
    <section className="app">
      <StickyDiv data={data}/>
    </section>
  );
}

export default App;
