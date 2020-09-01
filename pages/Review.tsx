import { Row, Col, Layout, Input, Button, Tooltip} from "antd";
import { connect } from 'react-redux';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { submitReview, editReview, deleteReview } from '../src/actions/review';
import UtilReview from '../src/components/utilReview';
import { Review } from '../src/actions/types';
import { RootState } from '../src/store';
import React from "react";
const { Content } = Layout;
const { TextArea } = Input;

interface ownProps {
    reviewInput: string;
}

interface stateProps {
    reviews: Review[];
    submit: (user: string, review: string, timestamp: any, id: string) => object;
    delete: (id: string) => object;
    edit: (user: string, review: string, timestamp: any, id: string) => object;
    
}

class RenderReview extends React.Component<stateProps, ownProps> {

    constructor(props: any){
        super(props);
        this.state = {
            reviewInput: ''
        }
    }

    handleDelete = (element: Review): void => {
        this.props.delete(element.id);
    }
    handleEdit = (element: Review) => {
        this.props.delete(element.id);
        this.setState({reviewInput: element.review});
    }

    renderOptions = (element: Review) => {
        return(
            <div style={{cursor: "pointer"}}>
                <span className="delete" onClick={() => this.handleDelete(element)}><DeleteFilled style={{fontSize: 20}}/></span>
                <span>{" "}</span>
                <span className="edit" onClick={() => this.handleEdit(element)}><EditFilled style={{fontSize: 20}}/></span>
            </div>
        )
    }

    handleChange = (event: any): void => {
        this.setState({reviewInput: event.target.value});
    }

    handleSubmit = (): void => {
        this.props.submit("Demo", this.state.reviewInput, "10AM", Math.random().toString(36).substring(5));
        this.setState({reviewInput: ""});
    }
    render(){
        return(
            <>
            <Content>
                <Layout style={{display:"flex", justifyContent:"center", height:"100vh"}}>
                    <div className="container">
                        <Row justify="center" align="middle">
                            <Col span={8} style={{display:"flex", justifyContent:"center", flexDirection: "column"}}>
                                {
                                    this.props.reviews.map((element) => (
                                       <UtilReview reviewElement={element} renderOptions={this.renderOptions(element)}/>
                                    ))
                                }
                            </Col>
                        </Row>
                    </div>
                    <div className="container">
                        <Row justify="center" align="middle">
                            <Col span={8} style={{display:"flex", justifyContent:"center", flexDirection: "column"}}>
                                <h1>
                                    Enter Review:
                                </h1>
                                <TextArea className="edit-text" rows={4} onChange={this.handleChange} value={this.state.reviewInput} placeholder={"Write a review..."}/>
                                <Button className="submit-button" style={{marginTop: 10, width: "150px", marginBottom: 50}} onClick={this.handleSubmit}>Submit</Button>
                            </Col>
                        </Row>
                    </div>
                </Layout>
            </Content>
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    reviews: state.review.reviews
})

const mapDispatchToProps = (dispatch: any) => {
    return({
        submit: (user: string, review: string, timestamp: any, id: string) => dispatch(submitReview({user, review, timestamp, id})),
        delete: (id: string) => dispatch(deleteReview(id)),
        edit: (user: string, review: string, timestamp: any, id: string) => dispatch(editReview({user, review, timestamp, id}))
    })
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connector(RenderReview);