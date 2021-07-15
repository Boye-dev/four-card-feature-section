import React from 'react';
import builder from './builder.svg';
import Calculator from './Calculator.svg';
import karma from './karma.svg';
import supervisor from './supervisor.svg';
import Content from './Content';
import contents from './contents';
function App() {
  const [sup, tea, kar, calc] = contents;

  const {headText, bodyText} = sup;
  const {headTexttea, bodyTexttea} = tea;
  const {headTextkar, bodyTextkar} = kar;
  const {headTextcal, bodyTextcal} = calc;

  return (<div >
    <div className="heading">
      <p className="text1">Reliable, efficient delivery</p>
      <p className="text2">Powered by Technology</p>
      <p className="text3">
        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
      </p>
    </div>
    <div className="cont-main">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="con-tent" style={{
              "border-top" : "3px solid hsl(180, 62%, 55%)"
            }}>
            <Content headText={sup.headText} bodyText={sup.bodyText} imgUrl={supervisor}/>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="con-tent2" style={{
              "border-top" : "3px solid hsl(0, 78%, 62%)"
            }}>
            <Content headText={tea.headTexttea} bodyText={tea.bodyTexttea} imgUrl={builder}/>
          </div>
          <div className="con-tent3" style={{
              "border-top" : "3px solid hsl(34, 97%, 64%)"
            }}>
            <Content headText={kar.headTextkar} bodyText={kar.bodyTextkar} imgUrl={karma}/>
          </div>

        </div>
        <div className="col-lg-4">
          <div className="con-tent" style={{
              "border-top" : "3px solid hsl(212, 86%, 64%)"
            }}>
            <Content headText={sup.headText} bodyText={sup.bodyText} imgUrl={Calculator}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>);
}

export default App;
