import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { createBlog } from '../actions';


class BlogEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSaving: false
        };
        this.saveBlog = this.saveBlog.bind(this);
    }
    saveBlog(story, heading) {
        const blog = {};
        blog.title = heading.title;
        blog.subTitle = heading.subTitle || '';
        blog.story = story;
        this.setState({
            isSaving: true
        });

        createBlog(blog).then(data => {
            this.setState({
                isSaving: false
            });
        })
            .catch(err => {
                const message = err.message || 'Server Error';
                console.error(message);
            });
    }
    render() {
        const { isSaving } = this.state;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-editor-page">
                    <SlateEditor isLoading={isSaving} save={this.saveBlog} />
                </BasePage>
            </BaseLayout>
        );
    }
};
export default withAuth('siteOwner')(BlogEditor);