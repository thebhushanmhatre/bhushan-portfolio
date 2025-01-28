import React, { Component } from 'react';
import { Row, Col, Container, Input } from 'reactstrap';
import { marked } from 'marked';
import ProjectBreadCrumb from '../common/ProjectBreadcrumb';

const defaultText = `## Heading h2 tag
 Here are [Links](https://www.linkedin.com/in/bhushanmhatre/)
 
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
`;

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultText,
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  render() {
    return (
      <Container className="mt-2">
        <ProjectBreadCrumb projectName={'Markdown Previewer'} />

        <Row style={{ backgroundColor: 'white' }}>
          <Col sm="12" md="6">
            <h4 className="text-center">
              <i>
                <u> Editor </u>
              </i>
            </h4>
            <Input
              type="textarea"
              id="editor"
              value={this.state.input}
              onChange={this.updateMarkdown}
              style={{ minHeight: '70vh' }}
            >
              {defaultText}
            </Input>
          </Col>

          <Col sm="12" md="6">
            <h4 className="text-center">
              <i>
                <u> Previewer </u>
              </i>
            </h4>
            <div
              style={{ minHeight: '70vh' }}
              className="border p-2"
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked.parse(this.state.markdown),
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MarkdownPreviewer;
