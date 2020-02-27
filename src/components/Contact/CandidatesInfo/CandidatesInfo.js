import React, { Component } from 'react';

class CandidatesInfo extends Component {
	render() {
		return (
			<div className='candidates-info-container'>
				<h1>
                    Candidates
				</h1>
                <h2>
                    ¿Te interesa formar parte del equipo?
                </h2>
                <h3>
                    No necesitas experiencia, solamente tienes que ser un estudiante del Tec de Monterrey, con una gran pasión para la robótica.
                </h3>
                <h3>
                    Presta atención a nuestra página de 
                    <a href={ 'https://www.facebook.com/RoBorregos/' }> { 'Facebook' }  </a>, 
                    donde se publicara en cuanto se abra la nueva convocatoria.
                </h3>
                <h4>
                    La fecha estimada de Candidates 2020 es el 24 de Agosto.
                </h4>
			</div>
		);
	}
}

export default CandidatesInfo;
