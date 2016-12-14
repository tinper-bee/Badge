
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Badge from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title 基本样式展示
 * @description `colors`控制背景颜色种类。
 */
class Demo1 extends Component {
	render () {
		return (
            <Badge colors="primary">primary</Badge>
		)
	}
}/**
 * @title 图标Badge
 * @description 在子元素里自定义内容
 */
class Demo2 extends Component {
	render(){
		return (
			<Badge colors="primary">
		    	<i className="uf uf-bellmusicaltool"></i>
		    </Badge>
		)
	}
}var DemoArray = [{"example":<Demo1 />,"title":" 基本样式展示","code":"/**\n * @title 基本样式展示\n * @description `colors`控制背景颜色种类。\n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n            <Badge colors=\"primary\">primary</Badge>\n\t\t)\n\t}\n}","desc":" `colors`控制背景颜色种类。"},{"example":<Demo2 />,"title":" 图标Badge","code":"/**\n * @title 图标Badge\n * @description 在子元素里自定义内容\n */\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<Badge colors=\"primary\">\n\t\t    \t<i className=\"uf uf-bellmusicaltool\"></i>\n\t\t    </Badge>\n\t\t)\n\t}\n}","desc":" 在子元素里自定义内容"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
