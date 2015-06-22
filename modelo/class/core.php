<?php 
//Núcleo del controlador de la capa de modelo

//Constantes, Flags mysql fields

const NOT_NULL_FLAG =  1;       /* Field can't be NULL */
const PRI_KEY_FLAG = 2;     /* Field is part of a primary key */
const UNIQUE_KEY_FLAG = 4;       /* Field is part of a unique key */
const MULTIPLE_KEY_FLAG = 8;     /* Field is part of a key */
const BLOB_FLAG = 16;      /* Field is a blob */
const UNSIGNED_FLAG = 32;      /* Field is unsigned */
const ZEROFILL_FLAG = 64;      /* Field is zerofill */
const BINARY_FLAG = 128;     /* Field is binary   */
const ENUM_FLAG = 256;     /* field is an enum */
const AUTO_INCREMENT_FLAG = 512;     /* field is a autoincrement field */
const TIMESTAMP_FLAG = 1024;        /* Field is a timestamp */
const SET_FLAG = 2048;        /* field is a set */
const NO_DEFAULT_VALUE_FLAG = 4096;  /* Field doesn't have default value */
const ON_UPDATE_NOW_FLAG = 8192;         /* Field is set to NOW on UPDATE */
const NUM_FLAG = 32768;       /* Field is num (for clients) */
const PART_KEY_FLAG = 16384;       /* Intern; Part of some key */
const GROUP_FLAG = 32768;       /* Intern: Group field */
const UNIQUE_FLAG = 65536;       /* Intern: Used by sql_yacc */
const BINCMP_FLAG = 131072;      /* Intern: Used by sql_yacc */
//const GET_FIXED_FIELDS_FLAG (1 << 18) /* Used to get fields in item tree */
//const FIELD_IN_PART_FUNC_FLAG (1 << 19)/* Field part of partition func */


//Objeto:Capa de Conección MYSQL c/ mysqli
//Descripción: Encargada de conectar y desconectar la base de datos
//Tipo: Clase
class DBConnector{
	var $servidor = '';
	var $clave = '';
	var $usuario = '';
	var $dbNombre = '';
	var $con = null;
	function DBConnector($_servidor, $_usuario, $_clave, $_dbNombre) {	//constructor
		$this->servidor = $_servidor;
		$this->usuario = $_usuario;
		$this->clave = $_clave;
		$this->dbNombre = $_dbNombre;
	}
	function conectar(){
		$this->con = new mysqli($this->servidor,$this->usuario,$this->clave,$this->dbNombre);
		return $this->con;
	}
	function desconectar(){
		$this->con->close();
	}
};

//Objeto:Clase de datos, 
//Descripción: encargada de procesar las consultas
//Tipo: Clase
class Datos{
	var $db = null;
	
	function Datos(){	//constructor
		$this->db = new DBConnector('localhost','root','','dexstore');
	}
	
	function query($_query){
		$this->db->conectar();		
		$res = $this->db->con->query($_query);
		
		$sentencia = $this->db->con->prepare($_query);
		$sentencia->execute();
		
		$resultado = $sentencia->result_metadata();
		
		$arFields = Array();
			
		while($campo = $resultado->fetch_field()){
			$campo->pk = (($campo->flags & PRI_KEY_FLAG)) ? '1': '0';			
			array_push($arFields,$campo);
		}
		
		//printf("Nombre del campo: %s\n", $campo->name);	
		
		$this->db->desconectar();		
		return json_encode($arFields);
	}
	
};


$dt = new Datos();
echo $dt->query("select * from usuarios");

?>
