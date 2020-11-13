import React, { Component } from 'react';
import { Row, Col, Container, Input } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import marked from "marked";

const defaultText = `## Heading h2 tag
 Here are [Links](https://www.linkedin.com/in/thebhushanmhatre/)
 
 Inline Code \`<div></div>\`
 (Don't Forget Escape characters in JS)
 
 Multiline Code: 
 \`\`\`
for (var i = 0; i < array.length; i++) {
  array[i] = i
}
 \`\`\`

 Lists:
 - item1
 - item2

> Block Quotes!
>> More Blocks

 Bold: **Time to Say Good Bye**
`

class Markdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: defaultText
    }
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
  
  updateMarkdown(e){
    this.setState({
      markdown: e.target.value
    });
  }
  
  render(){
    return(
      <Container className="m-2">
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/projects">Projects</a></BreadcrumbItem>
          <BreadcrumbItem active>Markdown Previewer</BreadcrumbItem>
        </Breadcrumb>

        <Row style={{backgroundColor: 'white'}}>
          <Col sm="12" md="6">
            <h4 className="text-center"><i><u> Editor </u></i></h4>
            <Input type="textarea" id="editor" value={this.state.input} onChange={this.updateMarkdown} 
            style={{minHeight: "70vh"}} >
              {defaultText}
            </Input>
          </Col>

          <Col sm="12" md="6">
            <h4 className="text-center"><i><u> Previewer </u></i></h4>
            <div style={{minHeight: "70vh"}} className="border p-2" id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} ></div>
          </Col>
        </Row>

      </Container>
    );
  }
}


export default Markdown;