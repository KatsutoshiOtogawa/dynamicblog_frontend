import React,{Component} from 'react';
import { Link } from 'react-router-dom'


class TarentFace extends Component{


    constructor(props){
        super(props);
        this.state = {
            id: null,
            tarent_face_name: null,
            tarent_face_memo: null,
            tarent_id: [],
            tarent_stage_name: [],

        }
    }

    componentDidMount(){
        const id =  parseInt(this.props.match.params.id);

        fetch(`http://127.0.0.1:8080/api/tarent_face/${id}/`)
        .then((res) => res.json())
        .then((data) => {

            this.setState({
                id: data.id,
                tarent_face_name: data.tarent_face_name,
                tarent_face_memo: data.tarent_face_memo,
                tarent_id: data.tarent_id,
                tarent_stage_name: data.tarent_stage_name,
            })

        })
        .catch((err) => {
            console.log(err)}
        )
        
    }
    
    render(){
        return(
            <>
                <h2>{this.state.tarent_face_name}</h2>
                <div dangerouslySetInnerHTML={{__html: this.state.tarent_face_memo}}></div>
                {(() => {
                    if(this.state.tarent_stage_name != null){
                        const items = [];
                        for (let i = 0; i < this.state.tarent_id.length; i++) {
                            items.push
                            (<li>
                                <Link to={`/tarent/${this.state.tarent_id[i]}`}>{this.state.tarent_stage_name[i]}</Link>
                            </li>)
                        }
                        return <ul>{items}</ul>;
                    }
                })()}
            </>
        );
    }
}

export default TarentFace;