package com.luxfacta.desktop.service;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import javax.swing.JOptionPane;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.gson.stream.JsonReader;
import com.luxfacta.desktop.infra.Entity;


public class API {
	
	private URL baseURL;
	private Gson gson;
	
	public API() {
		
		try {
			
			baseURL = new URL( "http://enqueteapi.luxfacta.com" ); 
			//baseURL = new URL("http://localhost:8080" ); 
			gson = new Gson();
			
		} catch ( Exception e ) {
			
			JOptionPane.showMessageDialog( 
					null, 
					"Exception in Api - " + e.getMessage() 
				);
			
		}
		
	}
	
	private String send( MethodType method, String uri, Object body ) throws ProtocolException, 
																			 MalformedURLException, 
																			 IOException {
		
		String response = "";
		
		try {
			
			URL url = new URL( baseURL , uri );
			
            HttpURLConnection conn = ( HttpURLConnection ) url.openConnection();
            
            conn.setRequestMethod( method.name() );
            conn.setRequestProperty( "Content-Type", "application/json; utf-8");
            conn.setRequestProperty( "Accept", "application/json" );
            conn.setUseCaches( false );
            conn.setDoInput( true );
            conn.setDoOutput( true );
            
            String json = gson.toJson( body );
            
            try ( OutputStream os = conn.getOutputStream() ) {
            	
            	byte[] input = json.getBytes("utf-8");
                os.write( input, 0, input.length );	
                
            }
            
            try (  
            	
            	BufferedReader br = new BufferedReader( new InputStreamReader(conn.getInputStream(), "utf-8"))) {
            	StringBuilder res = new StringBuilder();
            	String responseLine = null;
            	
            	while ( ( responseLine = br.readLine() ) != null ) {
            		        res.append(responseLine.trim());
            		    }
            	
            		    br.close();
            		    response = res.toString();
            	}
            
	        conn.disconnect(); 
	        
	        return response;

        } catch ( Exception e ) {
        	
        	throw e;
            
        } 
        	     
		
	}
	
	private JsonElement request( MethodType method, String uri ) throws ProtocolException, 
	     														        MalformedURLException, 
	     														  	    IOException {
		
		JsonElement jsonElement;
		
		try {
			
			URL url = new URL( baseURL , uri );
			
            HttpURLConnection conn = ( HttpURLConnection ) url.openConnection();
            
            conn.setRequestMethod( method.name() );
            conn.setRequestProperty( "Accept", "application/json" );
            conn.setRequestProperty( "Content-Type", "application/json");           
            
            if ( conn.getResponseCode() != 200 ) {
            	
                throw new RuntimeException(
                			"Failed : HTTP Error code : " + 
                			conn.getResponseCode()
                		);
                
            }
            
            InputStreamReader in = new InputStreamReader( conn.getInputStream(), "UTF-8" );
            
            JsonReader reader = new JsonReader( in );
            
            JsonParser jsonParser = new JsonParser();
            
            jsonElement = jsonParser.parse( reader );                 
            
            conn.disconnect(); 

        } catch ( Exception e ) {
        	
        	throw e;
            
        } 
        	      
        return jsonElement;
		
	}
	
	public Object[] getList( String uri, Class<? extends Entity> eclass ) throws Exception {
		
		Object[] ents = null;
		
		try {
			
			JsonElement jsonElement  = request( MethodType.GET, uri );
			
            Gson gson = new Gson();
           
            if ( jsonElement.isJsonArray() ) {
            	
            	JsonArray jsonArray = jsonElement.getAsJsonArray();
            	
            	int count = jsonArray.size(); 
            	
            	ents = new Object[ count  ];
            	
            	for( int i = 0; i <= count -1; i++ ) {
            		
            		JsonElement item = jsonArray.get(i);
            		String json = item.toString();
            		Object ent = gson.fromJson( json, eclass );
            		ents[ i ] = ent;
            		
            	}
            	    
            }
		
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		return ents;
		
	}
	
	public Entity post( String uri, Entity body,  Class<? extends Entity> responseClass  ) throws Exception {
		
		Entity ent = null;
		
		try {
			
			String response = send( MethodType.POST, uri, body );
			
			if ( response.length() > 0 && responseClass != null ) {
			
				Gson gson = new Gson();
		        ent = gson.fromJson( response, responseClass );
		        
			}

			
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		return ent;
		
	}

	
	public Object get( String uri, Class<? extends Entity> eclass ) throws Exception {
		
		Entity ent = null;
		
		try {
			
			JsonElement jsonElement =  request( MethodType.GET, uri );
			String response = jsonElement.toString();
			
			Gson gson = new Gson();
	        ent = gson.fromJson( response, eclass );
			
			
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		return ent;
		
	}
	

}
