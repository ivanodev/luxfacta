export default class ObjectUtils {

    static findProp = ( object, propPath ) => {

        let prop = undefined;
        let propName = '';

        if ( propPath && propPath.length > 0 ) {
    
            const propPaths = propPath.split('.');
    
            if ( propPaths.length > 0 ) {
    
                prop = object;

                for ( let i = 1; i <= propPaths.length - 1; i++ ) { 

                    propName = propPaths[ i ];

                    prop = prop[ propName ];
                    
                   if ( prop === undefined ) {
                         throw new Error( `Property ${propName} not found in object ${propPath}.`);
                   }
    
                }

            }
    
        }

        return prop;

    }

    static getLastPathName ( propPath ) {

        let propName = undefined;
        
        if ( propPath ) {

            const props = propPath.split( '.' );           
    
            if ( props.length > 1 ) {
                
                propName = props[ props.length - 1 ];

            } else {

                propName = propPath; 
                
            }

           return propName;

        }                


    }

    static getPropertyValue( object, path ) {
       
        let value = undefined;
        
        if ( path && path.length > 0 ) {

            const props = path.split( '.' );
            value = object;

            if ( !value ) return undefined;

            if ( props.length > 1 ) {
                
                let name = '';
                let propName = props[ props.length - 1 ];
    
                for ( let i = 0; i <= props.length - 1; i++ ) { 
    
                    name = props[ i ];

                    if ( value.hasOwnProperty( name ) === false ) {

                        continue;

                    }

                    value = value[ name ];

                    if ( !value ) {

                        return undefined;

                    } 

                    if ( value && Array.isArray( value ) === true ) {

                        if ( name === propName ) {

                            return value;

                        } else {

                            for ( let j = 0; j <= value.length -1; i++ ) {

                                const obj = value[0];
                                return this.getPropertyValue( obj, propName );

                            }

                        }
                        
                    }                    

                    if ( path === '' )
                        path = path + '.' + name
                    else    
                        path = name;
    
                }   
    
            } else {

                value = object[ path ]; 
                
            } 

        }

        return value;   

    }

    static setPropertyValue( object, path, propValue ) {
       
        let value = undefined;
        
        if ( path && path.length > 0 ) {

            const props = path.split( '.' );
            value = object;

            if ( !value ) return undefined;

            if ( props.length > 1 ) {
                
                let name = '';
                let proName = props[ props.length - 1];
    
                for ( let i = 1; i < props.length-1; i++ ) { 
    
                    name = props[ i ];
                    value = value[ name ];

                    if ( !value ) return undefined;

                    if ( typeof value  === 'object' ) {

                        return this.setPropertyValue( value, proName, propValue ); 
                        
                    } else if ( Array.isArray( value ) === true ) {

                        for ( let j = 0; j <= value.length -1; i++ ) {

                            const obj = value[0];
                            return this.setPropertyValue( obj, proName, propValue );

                        }
                        
                    }                    

                    if ( path === '' )
                        path = path + '.' + name
                    else    
                        path = name;
    
                }   

                if ( value )
                    value[name] = propValue;
    
            } else {

                object[ path ] = propValue; 
                
            } 

        }

    }

    static clone( obj ) {

     
        if ( typeof obj !== 'object' || obj === null ) {
            return obj;
        }

        let cloned = {};
        let i = 0;

        
        if ( obj instanceof Date ) {
            cloned = new Date( obj.getTime() );
            return cloned;
        }

      
        if ( obj instanceof Array ) {

            let l;
            cloned = [];
            for ( i = 0, l = obj.length; i < l; i++) {
                cloned[ i ] = this.clone( obj[ i ] );
            }

            return cloned;
        }

      
        cloned = {};
        for (i in obj ) if ( obj.hasOwnProperty( i ) ) {
            cloned[ i ] = this.clone( obj[ i ] );
        }
        
        return cloned;

    }

}


