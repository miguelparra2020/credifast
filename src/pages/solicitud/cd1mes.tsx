
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonPage } from '@ionic/react';
import './cd1mes.css';

import Toolbar from '../../components/Toolbar';


const cd1mes: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
        <Toolbar/>
        </IonHeader>
        <IonContent fullscreen >
        <div id="contenido_body">
            <div id='contenido_div'>
            <IonButton  href='/solicitud/cd1'>
                <IonChip color="secondary">Volver</IonChip>
            </IonButton>
            <IonCard id='car_cd1mes'>
                <IonCardHeader>
                    <IonCardTitle id='titulo_cd1mes'>Ya Escogió: $100.000 "Cien mil pesos m/cte" 💵</IonCardTitle>
                    <IonCardTitle id='titulo_cd1mes'>💲Para pagar de manera Mesual</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
        
                    <IonCardSubtitle>Tiene la opción de escoger cuantas cuotas desea pagar:</IonCardSubtitle>
                    <br />
                    <IonItem href="/solicitud/cd1mes1cm" color="secondary">
                            <IonLabel>👉 1 cuota mensual</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd1mes2cm" color="primary">
                            <IonLabel>👉 2 cuotas mensuales</IonLabel>
                    </IonItem>
                    <br />
                    <IonItem href="/solicitud/cd1mes3cm" color="tertiary">
                        <IonLabel>👉 3 cuotas mensuales</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            </div>
        </div>
        </IonContent>
        </IonPage>
    );
};

export default cd1mes;
