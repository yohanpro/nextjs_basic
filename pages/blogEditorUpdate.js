import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { getBlogById } from '../actions';


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

    render() {
        const { blog } = this.props;
        console.log(blog);
        const { isSaving } = this.state;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-editor-page">
                    <SlateEditor isLoading={isSaving} save={() => console.log('dfhdhfi updates')} />
                </BasePage>
            </BaseLayout>
        );
    }
};
export default withAuth('siteOwner')(BlogEditorUpdate);