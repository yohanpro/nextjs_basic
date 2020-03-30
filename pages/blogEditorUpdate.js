import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { getBlogById, updateBlog } from '../actions';


class BlogEditorUpdate extends React.Component {
    static async getInitialProps({ query }) {

        const blogId = query.id;
        try {
            const blog = await getBlogById(blogId);
            return { blog };
        } catch (error) {
            return { error };
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            isSaving: false
        };
    }

    updateBlog(story, heading) {
        const { blog } = this.props;
        const updateBlog = {};
        updateBlog.title = heading.title;
        updateBlog.subTitle, heading.subTitle;
        updateBlog.story = story;
        this.setState({
            isSaving: true
        });

        updateBlog(updateBlog, blog._id)
            .then(updatedBlog => {
                this.setState({
                    isSaving: false
                })
                    .catch(err => {
                        this.setState({ isSaving: false });
                        const message = err.message || 'Server Error';
                        console.error(message);
                    });
            });
    }
    render() {
        const { blog } = this.props;
        const { isSaving } = this.state;

        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-editor-page">
                    <SlateEditor initialValue={blog.story} isLoading={isSaving} save={() => this.updateBlog} />
                </BasePage>
            </BaseLayout>
        );
    }
};
export default withAuth('siteOwner')(BlogEditorUpdate);