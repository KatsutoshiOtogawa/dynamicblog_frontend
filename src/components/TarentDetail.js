import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchTarentDetail} from '../actions/TarentDetailActions'

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
            tarent_personality_name: null,
            tarent_face_name: [],
            tarent_body_name: null,
            tarent_upper_body_name: null,
            tarent_lower_body_name: null,
            tarent_bra_size_name: null,
        }
    }

    componentDidMount(){
        const id =  parseInt(this.props.match.params.id);

        /*
        this.props.fetchTarentDetail(id);
        const TarentDetail = this.state.tarent_detail
        this.setState({
            id: TarentDetail.id,
            stage_name:TarentDetail.stage_name,
            family_name:TarentDetail.family_name,
            first_name:TarentDetail.first_name,
            family_katakana_name:TarentDetail.family_katakana_name,
            first_katakana_name:TarentDetail.first_katakana_name,
            family_rome_name:TarentDetail.family_rome_name,
            first_rome_name:TarentDetail.first_rome_name,
            charm_point:TarentDetail.charm_point,
            birth_date:TarentDetail.birth_date,
            tarent_personality:TarentDetail.tarent_personality,
            tarent_face:TarentDetail.tarent_face,
            tarent_body:TarentDetail.tarent_body,
            tarent_upper_body:TarentDetail.tarent_upper_body,
            tarent_lower_body:TarentDetail.tarent_lower_body,
            tarent_bra_size:TarentDetail.tarent_bra_size,
        });
        */
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
                tarent_personality_name: data.tarent_personality_name,
                tarent_face_name: data.tarent_face_name,
                tarent_body_name: data.tarent_body_name,
                tarent_upper_body_name: data.tarent_upper_body_name,
                tarent_lower_body_name: data.tarent_lower_body_name,
                tarent_bra_size_name: data.tarent_bra_size_name,
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
                {this.state.tarent_bra_size_name}
                <h5>顔の傾向</h5>
                {this.state.tarent_face_name[0]}
                <h4>他サイトのレビュー<span role="img" aria-label="donut">📖</span></h4>
                {this.state.stage_name}
                <h5>twitter<span role="img" aria-label="donut">🐦</span></h5>
                <h5>instagram<span role="img" aria-label="donut">📷</span></h5>
                <h5>youtube<span role="img" aria-label="donut">🎬</span></h5>
                <h3>経歴</h3>
                <h3>SNS<span role="img" aria-label="donut">👀</span></h3>
                <h3>タイムライン<span>⏱</span></h3>
                    <a href='https://petnanukidol.blog.fc2.com/blog-entry-70.html'>この娘のタイムライン</a>
                <h3>出演作品<span role="img" aria-label="donut">🎨</span></h3>
                <div>
                    <ul>
                        <li></li>
                    </ul>
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
        tarent_personality_name: state.tarent_personality_name,
        tarent_face_name: state.tarent_face_name,
        tarent_body_name: state.tarent_body_name,
        tarent_upper_body_name: state.tarent_upper_body_name,
        tarent_lower_body_name: state.tarent_lower_body_name,
        tarent_bra_size_name: state.tarent_bra_size_name,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TarentDetail);