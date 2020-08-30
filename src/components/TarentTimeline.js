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

        fetch(`http://127.0.0.1:8080/api/tarent_timeline/${tarent_id}/`)
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
                {(() => {
                    if(this.state.twitter_embed_url != null){
                        const items = [];
                        
                        for (let i = 0; i < this.state.twitter_embed_url.length; i++) {
                            // twitter のtweetIdはurlの最後になる。
                            items.push
                            (
                                <Tweet tweetId={this.state.twitter_embed_url[i].split('/').slice(-1)[0]} />
                            )
                        }
                        return <div>{items}</div>
                    }
                })()}
                <h3>instagram📷</h3>
                <h3>youtube🎬</h3>
                <h3>この娘😘💕をもっと見👀たい、知りたい🤤</h3>
                <Link to={`/tarent/${this.state.tarent_id}`}>小林かれんの{this.state.tarent_stage_name}データ</Link>
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