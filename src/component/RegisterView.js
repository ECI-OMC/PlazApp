import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Select  from '@material-ui/core/Select';
//import GoogleMapReact from 'load-google-maps-api';
import './RegisterView.css';
import './styles.css';

var opts = [<option value="none">Seleccione una opcion</option>];

//const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export class RegisterView extends React.Component{
	
		/**static defaultProps = {
			center: { lat: 40.7446790, lng: -73.9485420 },
			zoom: 11
		}**/
	
		constructor(props) {
			super(props);
			this.state = {product : "", unit : "", productType: "none", cuantity: "", descript:"", total : ""};
			this.selected = require('./images/registerView/none.jpg');
		}
	
		selectedFirst =(event) =>{
			this.setState({productType : event.target.value});
			this.setState({product:""}); 
			this.setState({cuantity:""}); 
			this.setState({descript:""}); 
			this.setState({total:""});
			this.setState({unit:""});
			this.selected = require('./images/registerView/'+event.target.value+'.jpg');
			
		}
		
		getOpts(){
			if(this.state.productType == "verdura"){
				opts = [
					<option value="auyama">Auyama</option>,
					<option value="pepino">Pepino</option>,
					<option value="cebolla">Cebolla</option>,
					<option value="acelga">Acelga</option>,
					<option value="calabaza">Calabaza</option>
				];
			}
			
			else if(this.state.productType == "fruta"){
				opts = [
					<option value="manzana">Manzana</option>,
					<option value="pera">Pera</option>,
					<option value="mango">Mango</option>,
					<option value="sandia">Sandia</option>,
					<option value="papaya">Papaya</option>,
					<option value="banano">Banano</option>,
					<option value="durazno">Durazno</option>
				];
			}
			
			else if(this.state.productType == "granos"){
				opts = [
					<option value="frijol">frijol</option>,
					<option value="garbanzo">garbanzo</option>,
					<option value="lenteja">lenteja</option>,
					<option value="maiz">maiz</option>,
					<option value="arroz">arroz</option>
				];
			}
			
			else if(this.state.productType == "hortalizas"){
				opts = [
					<option value="zanahoria">zanahoria</option>,
					<option value="pimenton">pimenton</option>,
					<option value="nabo">nabo</option>,
					<option value="rabano">rabano</option>,
					<option value="abas">abas</option>
				];
			}
			
			else if(this.state.productType == "carnes"){
				opts = [
					<option value="res">res</option>,
					<option value="cerdo">cerdo</option>,
					<option value="pescado">pescado</option>,
					<option value="pollo">pollo</option>
				];
			}
			
			else if(this.state.productType == "tuberculos"){
				opts = [
					<option value="papa">Manzana</option>,
					<option value="yuca">Pera</option>,
					<option value="arracacha">Mango</option>
				];
			}	
			else{
				opts =[
					<option value="none">Seleccione una opcion</option>
				];
			}
			return opts;
		}
		
		selectedSecond =(event) =>{
			this.setState( {product: event.target.value} );
		}
		
		selectedMeasureUnit =(event) =>{
			this.setState( {unit: event.target.value} );
		}
		
		addCuantity = (event) =>{
			this.setState ({ cuantity: event.target.value+" "+this.state.unit});
		}
		
		addDescription = (event) =>{
			this.setState ({ descript: event.target.value});
		}
		
		addValue = (event) =>{
			this.setState ({ total: event.target.value});
		}
		
		
		render(){
			return(
				<main className="back">
					<Paper square={true} className="section">
						<h1 className="tittle">Bienvenido al registro de productos</h1>
						<br/>
						<hr/>
						<br/>
						<p>Seleccione el tipo de producto a vender</p>
						<div className="selectorSection">
							<img className="imageSelector" src={this.selected}/>
							<select className="selector" value={this.state.productType} onChange={this.selectedFirst}>
								<option value="none">Seleccione una opcion...</option>
								<option value="verdura">Verdura</option>
								<option value="fruta">Fruta</option>
								<option value="granos">Granos</option>
								<option value="hortalizas">Hortalizas</option>
								<option value="carnes">Carnes</option>
								<option value="tuberculo">Tuberculos</option>
							</select>
						</div>
						<p> Seleccione el producto...</p>
						<select className="selector" disabled = {(this.state.productType=="none")? true : false} defaultValue="none" onChange ={(this.selectedSecond)}>
							{this.getOpts()}
						</select>
						<p> Seleccione la cuantificación del producto</p>
						<select className="selector" disabled = {(this.state.productType=="none")? true : false} defaultValue="none" onChange ={(this.selectedMeasureUnit)}>
							<option value="none">Seleccione unidad de medida</option>
							<option value="Kilogramos">Kilogramos (Kg)</option>
							<option value="Libras">Libras (Lb)</option>
							<option value="Toneladas">Toneladas (Ton)</option>
							<option value="Arroba">Arroba (@)</option>
							<option value="Unidad">Unidad (u)</option>
						</select>
				</Paper>
				<Paper square = {true} className="section" id="inline">
					<div className = "paperSection">
						<form className="form">
	                        <FormControl margin="normal" required fullWidth>
	                            <InputLabel htmlFor="cantidad">Establezca la cantidad del producto ({this.state.unit})</InputLabel>
	                            <Input id="cantidad" 
										name="cantidad" 
										autoComplete="email" 
										autoFocus 
										disabled = {(this.state.productType=="none")? true : false}
										onChange={this.addCuantity}
								/>
	                        </FormControl>
	                        <FormControl margin="normal" fullWidth>
	                            <InputLabel htmlFor="description">Descricion del producto</InputLabel>
	                            <Input
	                                name="description"
									type="text"
									disabled = {(this.state.productType=="none")? true : false}
									onChange={this.addDescription}
	                            />
	                        </FormControl>
							<FormControl margin="normal" fullWidth>
	                            <InputLabel htmlFor="valor">Valor por unidad</InputLabel>
	                            <Input
	                                name="valor"
									type="text"
									disabled = {(this.state.productType=="none")? true : false}
									onChange={this.addValue}
	                            />
	                        </FormControl>
	                    </form>
					</div>
					<div className="paperSection">
						<div id="info">
							<img src={this.selected} id="infoImage"/>
							<div id="infoProduct">
								<h2>Detalles</h2>
								<br/>
								<hr/>
								<br/>
								<p> producto: {this.state.product} </p>
								<br/>
								<p> cantidad: {this.state.cuantity} </p>
								<br/>
								<p> descripcion: {this.state.descript} </p>
								<br/>
								<p> total: {this.state.total} </p>
							</div>
						</div>
					</div>
				</Paper>
				<Paper className="section">
						<h2> ubicacion </h2>
						
						<Button
							type="submit"
							fullWidth
							variant="raised"
							color="primary"
							className="submit"
							onClick = {this.props.handleSubmit}
						>
							 Registrar Producto
						</Button>
				</Paper>
					
				</main>
			
			);
		}
}
