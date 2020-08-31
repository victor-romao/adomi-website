import React from 'react';
import './Itens.css';
import CardDeItem from '../../components/CardDeItem/CardDeItem';

class Itens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulos: {
                entradas: 'Entradas',
                sobremesas: 'Sobremesas',
                bebidas: 'Bebidas',
                servicos_adicionais: 'Serviços Adicionais',
                inclusa_quantas_quiser: 'Inclusas – Escolha Quantas Quiser',
                inclusa_apenas_uma: 'Inclusas – Escolha Apenas Uma',
                adicionais: 'Adicionais'
            }
        }
    }

    renderSectionItens(section) {
        if(section === 'entradas'||section === 'sobremesas'){
            const section_info = this.props.info_itens[section];
            const length_inclusas_quantas_quiser = section_info.inclusa_quantas_quiser.length;
            const length_inclusas_apenas_uma = section_info.inclusa_apenas_uma.length;
            const length_adicionais = section_info.adicionais.length;
            if(length_inclusas_quantas_quiser!=0||length_inclusas_apenas_uma!=0||length_adicionais!=0) {
                return(
                    <div id = {section} className = {section + 'section'}>
                        <h4 className = 'bold'>{this.state.titulos[section]}</h4>
                        {this.renderItensSubdivision(section, 'inclusa_quantas_quiser')}
                        {this.renderItensSubdivision(section, 'inclusa_apenas_uma')}
                        {this.renderItensSubdivision(section, 'adicionais')}
                    </div>
                );
            }
        } else {
            const length_section = this.props.info_itens[section].length;
            if(length_section!==0) {
                return(
                    <div id = {section} className = {section + 'section'}>
                        <h4 className = 'bold'>{this.state.titulos[section]}</h4>
                        <div className = 'container'>
                            {this.props.info_itens[section].map(item => {
                                return <CardDeItem item = {item} type = 'adicionais' info_busca = {this.props.info_busca}/>
                            })}
                        </div>
                    </div>
                );
            }
        }
    }

    renderItensSubdivision(section, subdivision) {
        const length_subdivision = this.props.info_itens[section][subdivision].length;
        if(length_subdivision!==0) {
            return (
                <div className = {subdivision + ' subdivision'}>
                    <h6 className = 'bold'>{this.state.titulos[subdivision]}</h6>
                    <div className = 'container'>
                        {this.props.info_itens[section][subdivision].map(item => {
                            return <CardDeItem item = {item} type = {subdivision} info_busca = {this.props.info_busca}/>
                        })}
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <section className = 'itens_oferecidos'>
                {this.renderSectionItens('entradas')}
                {this.renderSectionItens('sobremesas')}
                {this.renderSectionItens('bebidas')}
                {this.renderSectionItens('servicos_adicionais')}                
            </section>
        );
    }
}

export default Itens;