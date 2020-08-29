import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import { Tweet } from 'react-twitter-widgets'

class TarentTimeline extends Component{


    constructor(props){
        super(props);
        this.state = {
            tarent_id: null,
            tarent_stage_name: null,
            twitter_embed_url: [],
            instagram_embed_url: [],
            youtube_embed_url: [],
        }
    }

    componentDidMount(){
        const tarent_id =  parseInt(this.props.match.params.tarent_id);

        fetch(`http://127.0.0.1:8080/api/tarent_time_line/${tarent_id}/`)
        .then((res) => res.json())
        .then((data) => {

            this.setState({
                tarent_id: data.tarent_id,
                tarent_stage_name: data.tarent_stage_name,
                twitter_embed_url: data.twitter_embed_url,
                instagram_embed_url: data.instagram_embed_url,
                youtube_embed_url: data.youtube_embed_url,
            })

        })
        .catch((err) => {
            console.log(err)}
        )
        
    }
    
    render(){
        return(
            <>
                <h2>{this.state.tarent_stage_name}のタイムライン</h2>
                <h3>twitter🐦</h3>
                <h3>instagram📷</h3>
                <h3>youtube🎬</h3>
                <h3>この娘😘💕をもっと見👀たい、知りたい🤤</h3>
                <a href="https://petnanukidol.blog.fc2.com/blog-entry-7.html">この娘の活動内容、SNS</a>
                
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

export default TarentTimeline;