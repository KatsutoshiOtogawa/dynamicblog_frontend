import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchTarentDetail} from '../actions/TarentDetailActions'
import { Link } from 'react-router-dom'
import InstagramEmbed from 'react-instagram-embed';
import ReactPlayer from 'react-player/lazy'
import { Tweet } from 'react-twitter-widgets'

class TarentDetail extends Component{


    constructor(props){
        super(props);
        this.state = {
            id: null,
            stage_name: null,
            family_name: null,
            first_name: null,
            family_katakana_name: null,
            first_katakana_name: null,
            family_rome_name: null,
            first_rome_name: null,
            charm_point: null,
            birth_date: null,
            tarent_personality_id: [],
            tarent_personality_name: [],
            tarent_face_id: [],
            tarent_face_name: [],
            tarent_body_id: [],
            tarent_body_name: [],
            tarent_upperbody_id: [],
            tarent_upperbody_name: [],
            tarent_lowerbody_id: [],
            tarent_lowerbody_name: [],
            tarent_art_id: [],
            tarent_art_name: [],
            tarent_site_url: [],
            site_type_name: [],
            twitter_embed_url: [],
            instagram_embed_url: [],
            youtube_embed_url: [],

        }
    }

    componentDidMount(){
        const id =  parseInt(this.props.match.params.id);

        fetch(`http://127.0.0.1:8080/api/tarent/${id}/`)
        .then((res) => res.json())
        .then((data) => {

            this.setState({
                id: data.id,
                stage_name: data.stage_name,
                family_name: data.family_name,
                first_name: data.first_name,
                family_katakana_name: data.family_katakana_name,
                first_katakana_name: data.first_katakana_name,
                family_rome_name: data.family_rome_name,
                first_rome_name: data.first_rome_name,
                charm_point: data.charm_point,
                birth_date: data.birth_date,
                tarent_personality_id: data.tarent_personality_id,
                tarent_personality_name: data.tarent_personality_name,
                tarent_face_id: data.tarent_face_id,
                tarent_face_name: data.tarent_face_name,
                tarent_body_id: data.tarent_body_id,
                tarent_body_name: data.tarent_body_name,
                tarent_upperbody_id: data.tarent_upperbody_id,
                tarent_upperbody_name: data.tarent_upperbody_name,
                tarent_lowerbody_id: data.tarent_lowerbody_id,
                tarent_lowerbody_name: data.tarent_lowerbody_name,
                tarent_brasize_id: data.tarent_brasize_id,
                tarent_brasize_name: data.tarent_brasize_name,
                tarent_art_id: data.tarent_art_id,
                tarent_art_name: data.tarent_art_name,
                tarent_site_url: data.tarent_site_url,
                site_type_name: data.site_type_name,
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
                <h2>{this.state.stage_name}</h2>
                <h3>レビュー</h3>
                <h4>良い点<span role="img" aria-label="donut">👍</span></h4>
                <h5>顔の傾向</h5>
                {(() => {
                    const items = [];
                    for (let i = 0; i < this.state.tarent_face_id.length; i++) {
                        items.push
                        (<li>
                            <Link to={`/tarent_face/${this.state.tarent_face_id[i]}`}>{this.state.tarent_face_name[i]}</Link>
                        </li>)
                    }
                    return <ul>{items}</ul>;
                })()}
                <h5>体格</h5>
                {(() => {
                    const items = [];
                    for (let i = 0; i < this.state.tarent_body_id.length; i++) {
                        items.push
                        (<li>
                            <Link to={`/tarent_body/${this.state.tarent_body_id[i]}`}>{this.state.tarent_body_name[i]}</Link>
                        </li>)
                    }
                    return <ul>{items}</ul>;
                })()}
                {(() => {
                    const items = [];
                    for (let i = 0; i < this.state.tarent_upperbody_id.length; i++) {
                        items.push
                        (<li>
                            <Link to={`/tarent_upperbody/${this.state.tarent_upperbody_id[i]}`}>{this.state.tarent_upperbody_name[i]}</Link>
                        </li>)
                    }
                    return <ul>{items}</ul>;
                })()}
                {(() => {
                    const items = [];
                    for (let i = 0; i < this.state.tarent_lowerbody_id.length; i++) {
                        items.push
                        (<li>
                            <Link to={`/tarent_lowerbody/${this.state.tarent_lowerbody_id[i]}`}>{this.state.tarent_lowerbody_name[i]}</Link>
                        </li>)
                    }
                    return <ul>{items}</ul>;
                })()}
                <h5>性格</h5>
                {(() => {
                    const items = [];
                    for (let i = 0; i < this.state.tarent_personality_id.length; i++) {
                        items.push
                        (<li>
                            <Link to={`/tarent_personality/${this.state.tarent_personality_id[i]}`}>{this.state.tarent_personality_name[i]}</Link>
                        </li>)
                    }
                    return <ul>{items}</ul>;
                })()}
                <h5>バストサイズ</h5>
                <Link to={`/tarent_brasize/${this.state.tarent_brasize_id}`}>{this.state.tarent_brasize_name}カップ</Link>
                
                <h4>他サイトのレビュー<span role="img" aria-label="donut">📖</span></h4>
                <h5>twitter<span role="img" aria-label="donut">🐦</span></h5>
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
                <h5>instagram<span role="img" aria-label="donut">📷</span></h5>
                {(() => {
                    if(this.state.instagram_embed_url != null){
                        const items = [];
                        for (let i = 0; i < this.state.instagram_embed_url.length; i++) {
                            items.push
                            (
                                
                                <InstagramEmbed
                                    url={this.state.instagram_embed_url[i]}
                                    hideCaption={false}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                                />
                            )
                        }
                        return <div>{items}</div>
                    }
                })()}
                
                <h5>youtube<span role="img" aria-label="donut">🎬</span></h5>
                {(() => {
                    if(this.state.youtube_embed_url != null){
                        const items = [];
                        for (let i = 0; i < this.state.youtube_embed_url.length; i++) {
                            // youtube embedはmaxWidthを指定しないとスマホでははみ出すため指定。
                            items.push
                            (
                                <ReactPlayer url={this.state.youtube_embed_url[i]} controls={true} style={{maxWidth: "100%"}} />
                            )
                        }
                        return <div>{items}</div>
                    }
                })()}

                <h3>経歴</h3>
                <h3>SNS<span role="img" aria-label="donut">👀</span></h3>
                {(() => {
                    const items = [];
                    for (let i = 0; i < this.state.tarent_site_url.length; i++) {
                        items.push
                        (<li>
                            <Link to={this.state.tarent_site_url[i]}>{this.state.site_type_name[i]}本人アカウント</Link>
                        </li>)
                    }
                    return <ul>{items}</ul>;
                })()}
                <h3>タイムライン<span>⏱</span></h3>
                    <a href='https://petnanukidol.blog.fc2.com/blog-entry-70.html'>この娘のタイムライン</a>
                <h3>出演作品<span role="img" aria-label="donut">🎨</span></h3>
                <div>
                
                {(() => {
                    const items = [];
                    for (let i = 0; i < this.state.tarent_art_id.length; i++) {
                        items.push
                        (<li>
                            <Link to={`/tarent_art/${this.state.tarent_art_id[i]}`}>{this.state.tarent_art_name[i]}</Link>
                        </li>)
                    }
                    return <ul>{items}</ul>;
                })()}
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTarentDetail: (id) => dispatch(fetchTarentDetail(id))
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        stage_name: state.stage_name,
        family_name: state.family_name,
        first_name: state.first_name,
        family_katakana_name: state.family_katakana_name,
        first_katakana_name: state.first_katakana_name,
        family_rome_name: state.family_rome_name,
        first_rome_name: state.first_rome_name,
        charm_point: state.charm_point,
        birth_date: state.birth_date,
        tarent_personality_id: state.tarent_personality_id,
        tarent_personality_name: state.tarent_personality_name,
        tarent_face_id: state.tarent_face_id,
        tarent_face_name: state.tarent_face_name,
        tarent_body_id: state.tarent_body_id,
        tarent_body_name: state.tarent_body_name,
        tarent_upperbody_id: state.tarent_upperbody_id,
        tarent_upperbody_name: state.tarent_upperbody_name,
        tarent_lowerbody_id: state.tarent_lowerbody_id,
        tarent_lowerbody_name: state.tarent_lowerbody_name,
        tarent_brasize_id: state.tarent_brasize_id,
        tarent_brasize_name: state.tarent_brasize_name,
        tarent_art_id: state.tarent_art_id,
        tarent_art_name: state.tarent_art_name,
        tarent_site_url: state.tarent_site_url,
        site_type_name: state.site_type_name,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TarentDetail);