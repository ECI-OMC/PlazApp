import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Select  from '@material-ui/core/Select';
import './plazas.css';
import './styles.css';

export class PlazasView extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {imgSlide:require("./images/plazas/start.jpg"), horario:"", productos: "", plaza:"Corabastos", indexSlide: 1, plazaUbicacion:require("./images/plazas/bogota.jpg")};
	}
	
	searchPlaza = (event) => {
		if (event.target.value != "selectPlaza"){
			this.setState({plaza: event.target.value});
			this.setState({imgSlide: require("./images/plazas/"+this.state.plaza+"/"+this.state.indexSlide+".jpg")});
			this.setState({plazaUbicacion: require("./images/plazas/"+this.state.plaza+"/ubicacion.jpg")});
			if (this.state.plaza =="Corabastos"){
				this.setState({horario: "Lunes a sabado de 8:00 a 15:00"});
				this.setState({productos: "Carnes de todo tipo, tuberculos, hortalizas, frutas y verduras."});
			}
			else if (this.state.plaza =="Paloquemao"){
				this.setState({horario: "Lunes a sabado de 4:00 a 12:00"});
				this.setState({productos: "flores, carnes y frutas"});
			}
			else if (this.state.plaza =="Restrepo"){
				this.setState({horario: "Lunes a sabado de 6:00 a 10:00"});
				this.setState({productos: "flores, pescados, carnes, verduras"});
			}
		}else{
			this.setState({imgSlide:require("./images/plazas/start.jpg")});
		}
	}
	
	/**changeImage(i){
		if (this.state.plaza != "selectPlaza"){
			if (this.state.indexSlide== 3 && i>0){
				this.setState({indexSlide:1});
			}else if (this.state.indexSlide<3 && this.state.indexSlide>1){
				this.setState({indexSlide: this.state.indexSlide+i});
			}else if (this.state.indexSlide==1 && i<0){
				this.setState({indexSlide:3});
			}
			this.setState({imgSlide: require("./images/plazas/"+this.state.plaza+"/"+this.state.indexSlide+".jpg")});
		}
	}**/
	
	
	render(){
		return(
			<main>
				<div className="section">
					<p> consulte las plazas de mercado mas cercanas y/o con mejores ofertas </p>
					<select className="selector" defaultValue="selectPlaza" onChange={this.searchPlaza}>
						<option value="selectPlaza">Seleccione una plaza</option>
						<option value="Corabastos"> Corabastos </option>
						<option value="Paloquemao"> Paloquemao </option>
						<option value="Restrepo"> Restrepo </option>
					</select>
					<div className="slideShow">
						<div className="controlContainer"> <span className="controlSlide" > ◄ </span></div>
						<img src={this.state.imgSlide} className="imageSlide"/>
						<div className="controlContainer"> <span className="controlSlide" > ► </span></div>
					</div>
				</div>
				<div className="section">
					<h2>Ubicación</h2>
					<div>
						<img src={this.state.plazaUbicacion} className="imgMap"/>
					</div>
				</div>
				<div className="section">
					<h2>Información</h2>
					<div className="infoPlaza">
						<h1>{this.state.namePlaza}</h1>
						<p>Horario de Atención: {this.state.horario}</p>
						<p>Productos relacionados: {this.state.productos}</p>
					</div>
				</div>
			</main>
		);
	}
	
}