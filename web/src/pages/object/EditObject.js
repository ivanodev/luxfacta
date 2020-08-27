import React, { useEffect, useState } from 'react';

import { ObjectView } from './styles';
import { ObjectContent } from './styles';
import { Layout } from './styles';
import { LayoutTitle } from './styles';
import { LayoutContent } from './styles';
import { ObjectLayout } from './styles';
import { Input, InputData, InputLabel } from './styles';
import { ObjectEditor } from './styles';
import { ObjectEditorHeader } from './styles';
import { ToolBarContainer, ToolBarButtons } from './styles';
import { ObjectList, ObjectListMaster, ObjectListDetail, ObjectListToolBar, ObjectListContent, ObjectListSeparator } from './styles';


import { ButtonFactory } from '../../components/Button';
import { findObjectIndex } from '../../utils/ArrayUtils';
import ObjectUtils from '../../utils/ObjectUtils';
import DataGrid from '../../components/DataGrid';

function EditObject( props ) {

    const [ dataObject, setDataObject ] = useState(null);

    useEffect( () => {

        const fecth = async () => {

            setDataObject({
                _id  : 0,
                actorType : ['company', 'customer', 'supplier', 'user'],
                person : {
                    fullName : 'Ivano Carvalho',
                    federalDoc : '28731415814',
                    stateDoc: '3013167604',
                    cityDoc: '',
                    phone : {
                       residencial : '33334444',
                       celular: '',
                       comercial : ''     
                    },
                    addresses : [
                        { id: 1, address : 'Rua Monsenhor Januario', number : "36" },
                        { id: 2, address : 'Rua Alfredo Pujol', number : "17"},
                        { id: 3, address : 'Rua Firminopolis',  number : "12"},
                        { id: 4, address : 'Rua Naninãna', number : "45" },
                    ]

                }

            });

        }

        fecth();

    }, []);

    const handleClickBack = event => {

       

    }

    const handleClickSave = event => {

       console.log( dataObject );

    }

    /**
     * Updates the state of the object being used in the component.
     * @param {*} e - HTML DOM Events
     * @param {*} currentObject - Current object that has changed
     */



    const updateState = ( e, currentObject ) => {

        try {

            const value = normalizeValue( e.target );
            const path = e.target.id;

            let newDataObject = Object.assign( {}, currentObject );

            ObjectUtils.setPropertyValue( newDataObject, e.target.id, value );

            setDataObject( newDataObject );

        } catch ( err ) {

            throw err;

        }

    }

    const handleChange = ( e ) => {

        updateState( e, dataObject );

    }

    // ObjectList

    const [ address, setAddress ] = useState(null);
    const [ index, setIndex ] = useState(0);

    const handleSelect = ( ...params ) => {

        setAddress( params[ 0 ] );
        setIndex( params[ 1 ]);

    }

    const addItemList = () => {

        const address =  { 
            id: 0, 
            address : '', 
            number : '' 
        }

        let newDataObject = Object.assign( {}, dataObject );

        newDataObject.person.addresses.unshift( address );

        setDataObject( newDataObject );

        const element = document.getElementById( `actor.person.addresses.${0}.address` );
    
        setIndex( 0 );
        selectRow( 0 );
        
        if ( element )
            element.focus();

    }

    const removeItemList = () => {

        if ( index >= 0 ) {

            let newDataObject = Object.assign( {}, dataObject );

            newDataObject.person.addresses.splice( index, 1 );

            setDataObject( newDataObject );

            if ( newDataObject.person.addresses.length > 0 ) {

                if ( index > 0 )
                    setIndex( index - 1 );

            }

        }

    }

    const evenLineColor = '#fff9f9';
    const oddLineColor = '#ffffff';
    const selectedLineColor = '#ffff00';

    const selectRow = rowNumber =>  {

        let isRowEven = false;
    
        var htmlCollection = document.getElementsByClassName('row-data-data-grid');

        for ( let i = 0; i < htmlCollection.length; i++ ) {

            let row = htmlCollection[ i ];

            isRowEven = i % 2 === 0; // check if the index is an even number

            if ( isRowEven ) 
                row.style.background = evenLineColor;
            else    
                row.style.background = oddLineColor;

            if ( rowNumber === i )            
                row.style.background = selectedLineColor;
            
        } 

    }

    //****** */

    return (
            <ObjectEditor>
                <ObjectEditorHeader>
                    <label>
                        Cliente
                    </label>
                </ObjectEditorHeader>
            
                <ObjectView>
                    <ObjectContent>
                        <LayoutContent columns={2}>
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados Pessoais</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={2}>  
                                    { dataObject && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                    onChange={(e)=>handleChange(e)}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.phone.residencial" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                    onChange={(e)=>handleChange(e)}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={1}>   
                                { dataObject && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                        </LayoutContent>
                    
                        <LayoutContent columns={1} >
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados Pessoais</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={2} color="white" >   
                                { dataObject && 
                                        <>  
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                        </LayoutContent> 

                        <LayoutContent  columns={1}>
                            <Layout>
                                <LayoutTitle>
                                    <label>Endereços</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectList columns={1} color="black" >
                                    <ObjectListToolBar>
                                        <ToolBarButtons>                    
                                        {
                                            createBtnAction( addItemList, '', 'add-black', null )
                                        }               
                                        {
                                            createBtnAction( removeItemList, '', 'remove-black', null )
                                        }
                                        </ToolBarButtons>

                                    </ObjectListToolBar>
                                    <ObjectListContent>
                                        <ObjectListMaster>
                                            { dataObject &&
                                            <DataGrid 
                                                data={dataObject.person.addresses}
                                                keyProp={'id'}
                                                specColumns={[{
                                                        name: "address", 
                                                        title: "",
                                                        dataType: "string",
                                                        idData: "",
                                                        idTitle: "" 
                                                }]}
                                                onAfterSelect={handleSelect}
                                                showTitle={false}
                                                //actions={actions}
                                            />}
                                        </ObjectListMaster>
                                        <ObjectListSeparator>
                                                <div/>
                                        </ObjectListSeparator>
                                        <ObjectListDetail>
                                            <Layout>
                                                <ObjectLayout columns={2} color="white" >   
                                                { dataObject && dataObject.person.addresses.length > 0 &&
                                                        <>  
                                                            <Input>
                                                                <InputLabel htmlFor="actor.person.addresses.3.address">
                                                                    Rua
                                                                </InputLabel>
                                                                <InputData
                                                                    id={`actor.person.addresses.${index}.address`}
                                                                    value={dataObject.person.addresses[index].address}
                                                                    onChange={(e)=>handleChange(e)}
                                                                />
                                                            </Input>
                                                            <Input>
                                                                <InputLabel htmlFor="address.number" >
                                                                    Number
                                                                </InputLabel>
                                                                <InputData
                                                                    id={`actor.person.addresses.${index}.number`}
                                                                    value={dataObject.person.addresses[index].number}
                                                                    onChange={(e)=>handleChange(e)}
                                                                />
                                                            </Input>     
                                                                                                                                
                                                        </>
                                                }
                                                </ObjectLayout>
                                            </Layout>
                                        </ObjectListDetail>
                                    </ObjectListContent>
                                   
                                </ObjectList>
                            </Layout>
                        </LayoutContent>

                    </ObjectContent>
                </ObjectView>
            </ObjectEditor>
    )



}

export default EditObject;


const createBtnAction = ( handler, className, iconName, param ) => {

    if ( handler )
        return ButtonFactory( 'normal', className, () => handler( handler, param ), iconName );
    else
        return undefined;

}

const normalizeValue = ( field ) => {

    var value = null;
   
    switch ( field.type ) {

        case 'number':

            value = field.value;

            if ( Number.isInteger( value ) ) {

                value = parseInt( value, 0 );

            } else {

                value = parseFloat( value );

            }

            break;

        case 'checkbox':
            value = field.checked;
            break;
        default:
            value = field.value;
            break;

    }

    return value;

}

const getPaths = ( field ) => {

    const id = field.id;

    if ( id.length === 0 ) {
        throw new Error( 
            'HTML element without id. It will not be possible to update the state of this property. ' 
        );
    }

    return id.split( '.' ); 

}


{
    "docs": [
      {
        "person": {
          "address": {
            "default": true,
            "isActive": true,
            "street": "Rua Monsenhor Januário Sangirardi",
            "number": "80",
            "complement": "Nenhum",
            "district": "Freguesia do Ó",
            "postalCode": "02962100",
            "city": "São Paulo",
            "state": "SP",
            "deactivatedAt": null,
            "createdAt": "2019-08-14T18:02:14.219Z",
            "updatedAt": null
          },
          "phone": {
            "phoneHome": "",
            "phoneBussines": "",
            "phoneMobile": ""
          },
          "fullName": "JMC Transportes LTDA",
          "nickName": "JMC",
          "federalDoc": "25206854000125",
          "stateDoc": "",
          "cityDoc": "",
          "birthDate": null,
          "email": "ivano.sistemas@gmail.com",
          "addresses": [
            {
              "default": true,
              "isActive": true,
              "_id": "5e52ac096b40cc0cf307d61f",
              "street": "Rua Professor Silva de Azevedo",
              "number": "122",
              "complement": "Nenhum",
              "district": "Casa Verde",
              "postalCode": "02512510",
              "city": "São Paulo",
              "state": "SP",
              "deactivatedAt": null,
              "createdAt": "2019-08-14T18:02:14.219Z",
              "updatedAt": null
            },
            {
              "default": false,
              "isActive": true,
              "_id": "5e52ac096b40cc0cf307d61e",
              "street": "Rua Felipe Gouveia da Silva",
              "number": "135",
              "complement": "Nenhum",
              "district": "Casa Verde",
              "postalCode": "025125100",
              "city": "São Paulo",
              "deactivatedAt": null,
              "createdAt": "2019-08-14T18:02:14.219Z",
              "updatedAt": null
            }
          ],
          "deactivatedAt": null,
          "updatedAt": null,
          "createdAt": "2020-02-23T16:43:41.506Z"
        },
        "actorType": [
          "company",
          "customer"
        ],
        "isActive": true,
        "_id": "5e16896187ec1b3011c23dc4",
        "homePage": "www.jmc.com",
        "documents": [
          {
            "_id": "5e19dd384d8b661581de7a09",
            "title": "Contrato de Locação",
            "type": "Doc",
            "issuedDate": "2019-08-01T18:02:14.219Z",
            "expirateDate": "2019-12-31T18:02:14.219Z",
            "attachedFilePath": "teste"
          }
        ],
        "vehicles": [],
        "createdAt": "2019-09-04T23:02:14.219Z",
        "updatedAt": "2020-08-20T05:10:16.000Z",
        "deactivatedAt": null,
        "__v": 0,
        "code": 1
      },
      {
        "person": {
          "address": {
            "default": true,
            "isActive": true,
            "street": "Rua Monsenhor Januário Sangirardi",
            "number": "42",
            "complement": "Nenhum",
            "district": "Freguesia do Ó",
            "postalCode": "02962100",
            "city": "São Paulo",
            "state": "SP",
            "deactivatedAt": null,
            "createdAt": "2019-08-14T18:02:14.219Z",
            "updatedAt": null
          },
          "phone": {
            "phoneHome": "",
            "phoneBussines": "",
            "phoneMobile": ""
          },
          "isActive": true,
          "fullName": "Colinos",
          "nickName": "JMC",
          "federalDoc": "25206854000125",
          "stateDoc": "",
          "cityDoc": "",
          "birthDate": null,
          "email": "ivano.sistemas@gmail.com",
          "addresses": [
            {
              "default": true,
              "isActive": true,
              "_id": "5e52ac546b40cc0cf307d625",
              "street": "Rua Professor Silva de Azevedo",
              "number": "122",
              "complement": "Nenhum",
              "district": "Casa Verde",
              "postalCode": "025125100",
              "city": "São Paulo",
              "state": "SP",
              "deactivatedAt": null,
              "createdAt": "2019-08-14T18:02:14.219Z",
              "updatedAt": null
            },
            {
              "default": false,
              "isActive": true,
              "_id": "5e52ac546b40cc0cf307d624",
              "street": "Rua Felipe Gouveia da Silva",
              "number": "135",
              "complement": "Nenhum",
              "district": "Casa Verde",
              "postalCode": "025125100",
              "city": "São Paulo",
              "deactivatedAt": null,
              "createdAt": "2019-08-14T18:02:14.219Z",
              "updatedAt": null
            }
          ],
          "deactivatedAt": null,
          "updatedAt": null,
          "createdAt": "2020-02-23T16:45:38.693Z"
        },
        "actorType": [
          "company",
          "supplier"
        ],
        "isActive": true,
        "_id": "5e16969fb0500133e0dc92dd",
        "homePage": "www.jmc.com.br",
        "documents": [
          {
            "_id": "5e16969fb0500133e0dc92de",
            "title": "Contrato de Locação",
            "type": "Doc",
            "issuedDate": "2019-08-01T18:02:14.219Z",
            "expirateDate": "2019-12-31T18:02:14.219Z",
            "attachedFilePath": "teste"
          }
        ],
        "vehicles": [],
        "createdAt": "2020-01-09T02:57:35.000Z",
        "updatedAt": "2020-03-14T14:55:22.000Z",
        "deactivatedAt": null,
        "__v": 0,
        "code": 3
      },
      {
        "person": {
          "address": {
            "default": true,
            "isActive": true,
            "street": "Rua Monsenhor Januário Sangirardi",
            "number": "36",
            "complement": "Nenhum",
            "district": "Freguesia do Ó",
            "postalCode": "02962100",
            "city": "São Paulo",
            "state": "SP",
            "deactivatedAt": null,
            "createdAt": "2019-08-14T18:02:14.219Z",
            "updatedAt": null
          },
          "phone": {
            "phoneHome": "",
            "phoneBussines": "",
            "phoneMobile": ""
          },
          "fullName": "WINKEL Transportes SA",
          "nickName": "WINKEL",
          "federalDoc": "25206854000333",
          "stateDoc": "",
          "cityDoc": "",
          "birthDate": null,
          "email": "ivano.sistemas@gmail.com",
          "addresses": [
            {
              "default": true,
              "isActive": true,
              "_id": "5e52ac296b40cc0cf307d622",
              "street": "Rua Professor Silva de Azevedo",
              "number": "122",
              "complement": "Nenhum",
              "district": "Casa Verde",
              "postalCode": "02512510",
              "city": "São Paulo",
              "state": "SP",
              "deactivatedAt": null,
              "createdAt": "2019-08-14T18:02:14.219Z",
              "updatedAt": null
            }
          ],
          "deactivatedAt": null,
          "updatedAt": null,
          "createdAt": "2020-02-23T16:45:09.703Z"
        },
        "actorType": [
          "company",
          "customer"
        ],
        "isActive": true,
        "_id": "5e179d2f6551270b1317bd4b",
        "homePage": "www.jmc.com.br",
        "documents": [
          {
            "_id": "5e179d2f6551270b1317bd4c",
            "title": "Contrato de Locação",
            "type": "Doc",
            "issuedDate": "2019-08-01T18:02:14.219Z",
            "expirateDate": "2019-12-31T18:02:14.219Z",
            "attachedFilePath": "teste"
          }
        ],
        "vehicles": [],
        "createdAt": "2020-01-09T21:37:51.000Z",
        "updatedAt": "2020-06-29T21:56:47.000Z",
        "deactivatedAt": null,
        "__v": 0,
        "code": 2
      },
      {
        "person": {
          "address": {
            "default": true,
            "isActive": true,
            "street": "Rua Monsenhor Januário Sangirardi",
            "number": "33",
            "complement": "Nenhum",
            "district": "Freguesia do Ó",
            "postalCode": "02962100",
            "city": "São Paulo",
            "state": "SP",
            "deactivatedAt": null,
            "createdAt": "2019-08-14T18:02:14.219Z",
            "updatedAt": null
          },
          "phone": {
            "phoneHome": "23123",
            "phoneBussines": "123123",
            "phoneMobile": "123123"
          },
          "fullName": "Asturias Materiais Elétricos",
          "nickName": "JMC",
          "federalDoc": "25206854000125",
          "stateDoc": "",
          "cityDoc": "",
          "birthDate": null,
          "email": "ivano.sistemas@gmail.com",
          "addresses": [
            {
              "default": true,
              "isActive": true,
              "_id": "5e52ac796b40cc0cf307d628",
              "street": "Rua Professor Silva de Azevedo",
              "number": "122",
              "complement": "Nenhum",
              "district": "Casa Verde",
              "postalCode": "025125100",
              "city": "São Paulo",
              "state": "SP",
              "deactivatedAt": null,
              "createdAt": "2019-08-14T18:02:14.219Z",
              "updatedAt": null
            },
            {
              "default": false,
              "isActive": true,
              "_id": "5e52ac796b40cc0cf307d627",
              "street": "Rua Felipe Gouveia da Silva",
              "number": "135",
              "complement": "Nenhum",
              "district": "Casa Verde",
              "postalCode": "025125100",
              "city": "São Paulo",
              "deactivatedAt": null,
              "createdAt": "2019-08-14T18:02:14.219Z",
              "updatedAt": null
            }
          ],
          "deactivatedAt": null,
          "updatedAt": null,
          "createdAt": "2020-02-23T16:46:19.803Z"
        },
        "actorType": [
          "company",
          "supplier"
        ],
        "isActive": true,
        "_id": "5e19dd544d8b661581de7a0a",
        "homePage": "www.jmc.com.br",
        "documents": [
          {
            "_id": "5e19dd544d8b661581de7a0b",
            "title": "Contrato de Locação",
            "type": "Doc",
            "issuedDate": "2019-08-01T18:02:14.219Z",
            "expirateDate": "2019-12-31T18:02:14.219Z",
            "attachedFilePath": "teste"
          }
        ],
        "vehicles": [
          {
            "isActive": true,
            "createdAt": null,
            "_id": "5e6d8f7ca1150215c4c503da",
            "acronym": "eqwe",
            "plate": "BMC3053",
            "statePlace": "São Paulo",
            "brand": "teste",
            "model": "teste",
            "color": "#ff0000",
            "yearOfManufacture": 1910,
            "yearOfModel": 1910,
            "fuelCapacity": 20,
            "Vin": "20",
            "deactivatedAt": null,
            "updatedAt": null
          },
          {
            "isActive": true,
            "createdAt": null,
            "_id": "5e6d8f7ca1150215c4c503d9",
            "acronym": "",
            "plate": "",
            "statePlace": "",
            "brand": "",
            "model": "",
            "color": "",
            "yearOfManufacture": 0,
            "yearOfModel": 0,
            "fuelCapacity": 0,
            "Vin": "",
            "deactivatedAt": null,
            "updatedAt": null
          }
        ],
        "createdAt": "2020-01-11T14:36:04.000Z",
        "updatedAt": "2020-03-15T02:36:19.000Z",
        "deactivatedAt": null,
        "__v": 0,
        "code": 4
      },
      {
        "person": {
          "address": {
            "default": true,
            "isActive": true,
            "street": "R LEOPOLDO COUTO MAGALHAES JUNIOR",
            "number": "700",
            "complement": "ANDAR 7 E 8 CONJ 71, 72, 81 E 82",
            "district": "ITAIM BIBI",
            "postalCode": "04542000",
            "city": "SAO PAULO",
            "state": "SP"
          },
          "phone": {
            "phoneHome": "",
            "phoneBussines": "1155030000",
            "phoneMobile": ""
          },
          "fullName": "APPLE COMPUTER BRASIL LTDA",
          "nickName": "APPLE",
          "stateDoc": "",
          "cityDoc": "",
          "birthDate": null,
          "addresses": [
            {
              "default": true,
              "isActive": true,
              "_id": "5efbc8cec299202dfe87141c",
              "street": "R LEOPOLDO COUTO MAGALHAES JUNIOR",
              "number": "700",
              "complement": "ANDAR 7 E 8 CONJ 71, 72, 81 E 82",
              "district": "ITAIM BIBI",
              "postalCode": "04542000",
              "city": "SAO PAULO",
              "state": "SP",
              "deactivatedAt": null,
              "createdAt": null,
              "updatedAt": null
            }
          ],
          "deactivatedAt": null,
          "createdAt": null,
          "updatedAt": null,
          "federalDoc": "00623904000173"
        },
        "actorType": [
          "company",
          "customer"
        ],
        "isActive": true,
        "_id": "5efbc8cec299202dfe87141b",
        "homePage": "",
        "code": 234,
        "documents": [],
        "vehicles": [],
        "createdAt": "2020-06-30T23:20:46.000Z",
        "updatedAt": "2020-06-30T23:20:46.000Z",
        "deactivatedAt": null,
        "__v": 0
      },
      {
        "person": {
          "address": {
            "default": true,
            "isActive": true,
            "street": "R SACADURA CABRAL",
            "number": "102",
            "complement": "",
            "district": "SAUDE",
            "postalCode": "20081902",
            "city": "RIO DE JANEIRO",
            "state": "RJ"
          },
          "phone": {
            "phoneHome": "",
            "phoneBussines": "2122066708",
            "phoneMobile": ""
          },
          "fullName": "LOJAS AMERICANAS S.A.",
          "nickName": "AMERICANAS",
          "stateDoc": "",
          "cityDoc": "",
          "birthDate": null,
          "addresses": [
            {
              "default": true,
              "isActive": true,
              "_id": "5f00d1726972360e7412d708",
              "street": "R SACADURA CABRAL",
              "number": "102",
              "complement": "AMERICANAS",
              "district": "SAUDE",
              "postalCode": "20081902",
              "city": "RIO DE JANEIRO",
              "state": "RJ",
              "deactivatedAt": null,
              "createdAt": null,
              "updatedAt": null
            }
          ],
          "deactivatedAt": null,
          "createdAt": null,
          "updatedAt": null,
          "federalDoc": "33014556000196"
        },
        "actorType": [
          "company"
        ],
        "isActive": true,
        "_id": "5f00d1726972360e7412d707",
        "homePage": "",
        "code": 123888,
        "documents": [],
        "vehicles": [],
        "createdAt": "2020-07-04T18:58:58.000Z",
        "updatedAt": "2020-07-04T18:58:58.000Z",
        "deactivatedAt": null,
        "__v": 0
      },
      {
        "person": {
          "address": {
            "default": true,
            "isActive": true,
            "street": "AV GENERAL JUSTO",
            "number": "375",
            "complement": "ANDAR 6 SALA 601 E 602",
            "district": "CENTRO",
            "postalCode": "20021130",
            "city": "RIO DE JANEIRO",
            "state": "RJ"
          },
          "phone": {
            "phoneHome": "",
            "phoneBussines": "552731827198",
            "phoneMobile": ""
          },
          "fullName": "LOG-IN - LOGISTICA INTERMODAL S/A",
          "nickName": "LOG-IN",
          "stateDoc": "",
          "cityDoc": "",
          "birthDate": null,
          "addresses": [
            {
              "default": true,
              "isActive": true,
              "_id": "5f00e331efbd8126c083695a",
              "street": "AV GENERAL JUSTO",
              "number": "375",
              "complement": "ANDAR 6 SALA 601 E 602",
              "district": "CENTRO",
              "postalCode": "20021130",
              "city": "RIO DE JANEIRO",
              "state": "RJ",
              "deactivatedAt": null,
              "createdAt": null,
              "updatedAt": null
            }
          ],
          "deactivatedAt": null,
          "createdAt": null,
          "updatedAt": null,
          "federalDoc": "42278291000124"
        },
        "actorType": [
          "customer",
          "company"
        ],
        "isActive": true,
        "_id": "5f00e331efbd8126c0836959",
        "homePage": "",
        "code": 3445,
        "documents": [],
        "vehicles": [],
        "createdAt": "2020-07-04T20:14:41.000Z",
        "updatedAt": "2020-07-04T20:14:41.000Z",
        "deactivatedAt": null,
        "__v": 0
      }
    ],
    "total": 7,
    "limit": 10,
    "offset": 0,
    "page": 1,
    "pages": 1
  }