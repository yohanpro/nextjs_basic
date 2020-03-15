import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';

class BlogEditor extends React.Component {
    constructor(props) {
        super(props);
        this.saveBlog = this.saveBlog.bind(this);
    }
    saveBlog() {
        console.log('save blogs');
    }
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-editor-page" title="블로그 쓰기">
                    <h1>I'm BlogEditor Page</h1>
                    <SlateEditor save={this.saveBlog} />
                </BasePage>
            </BaseLayout>
        );
    }
};
export default withAuth('siteOwner')(BlogEditor);