<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type,Authorization, Accept, X-Request-Width, x-xsrf-token');
header('ContentType: application/json; charset=utf-8');

include ('bd.php');
$respone=array();
$post=json_decode(file_get_contents('php://input'),true);

///////////////////-----------------------------LISTAR PROVEEDORES---------------//////////////////////////
if ($post['accion'] == 'listarProveedores') {
    $sentencia = "SELECT * FROM proveedores;";
    $result = mysqli_query($mysql, $sentencia);
    $f = mysqli_num_rows($result);
    $proveedores = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($proveedores, array(
            'id' => $row['id_prov'],
            'nombre'  => $row['nombre_prov'],
            'direccion'  => $row['dir_prov'],
            'telefono'  => $row['tel_prov'],   
            'email'  => $row['email_prov'],   
            'pais'  => $row['pais_prov'],   
        ));
    }
    if ($f > 0) {
        $envio = json_encode(array('estado'=>true, 'proveedores'=>$proveedores));
    } else {
        $envio = json_encode(array('estado'=>false));
    }
    echo $envio;
}


///////////////////////------------AÑADIR PROVEEDOR---------/////////////////////
if ($post['accion']=='addProveedor')
{
$sentencia =sprintf(
    "INSERT INTO proveedores (nombre_prov, dir_prov, tel_prov, email_prov, pais_prov) 
    values ('%s', '%s', '%s', '%s', '%s')"
,$post['nombre'],$post['direccion'],$post['telefono'],$post['email'],$post['pais']);
$result=mysqli_query($mysql,$sentencia);
if($result)
{
    $envio=json_encode(array('estado'=>true));
}
else
{
    $envio=json_encode(array('estado'=>false));
}
echo $envio;
}

///////////////////-----------------------------CARGAR DATOS DEL PROVEEDOR---------------//////////////////////////
if ($post['accion'] == 'cargarDatosProveedor') {

    $idProveedor = $post['idProveedor'];
    $sentencia = "SELECT * FROM proveedores WHERE id_prov = '$idProveedor'";
    $result = mysqli_query($mysql, $sentencia);
    $f = mysqli_num_rows($result);
    $datosProveedor = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($datosProveedor, array(
            'id' => $row['id_prov'],
            'nombre'  => $row['nombre_prov'],
            'direccion'  => $row['dir_prov'],
            'telefono'  => $row['tel_prov'],   
            'email'  => $row['email_prov'],   
            'pais'  => $row['pais_prov'],   
        ));
    }
    if ($f > 0) {
        $envio = json_encode(array('estado'=>true, 'datosProveedor'=>$datosProveedor));
    } else {
        $envio = json_encode(array('estado'=>false));
    }
    echo $envio;
}

/////////////////-----------ACTUALIZAR PROVEEDOR--------------///////////
if ($post['accion'] == 'updateProveedor') {
    $sentencia = sprintf(
        "UPDATE proveedores SET nombre_prov='%s', dir_prov='%s', tel_prov='%s', email_prov='%s', pais_prov='%s' WHERE id_prov='%s'",
        $post['nombre'],$post['direccion'],$post['telefono'],$post['email'],$post['pais'],$post['idProveedor']
    );
    $result = mysqli_query($mysql, $sentencia);
    if ($result) {
        $envio = json_encode(array('estado' => true));
    } else {
        $envio = json_encode(array('estado' => false));
    }
    echo $envio;
}

////////-----------ELIMINAR PROVEEDOR--------------///////////
if ($post['accion']=='deleteProveedor')
{
$sentencia =sprintf(
    "DELETE FROM proveedores WHERE id_prov='%s'",$post['idProveedor']);
$result=mysqli_query($mysql,$sentencia);
if($result)
{
    $envio=json_encode(array('estado'=>true));
}
else
{
    $envio=json_encode(array('estado'=>false));
}
echo $envio;
}


///////////////////-----------------------------LISTAR PRODUCTOS---------------//////////////////////////
if ($post['accion'] == 'listarProductos') {
    $sentencia = "SELECT
    id_prod, nombre_prod, precio_prod, fecha_fab_prod, cantidad_prod,
      ec.nombre_prov AS provedorProducto
      FROM productos p
    JOIN proveedores ec ON p.prov_id_prod = ec.id_prov ORDER BY id_prod DESC";
    $result = mysqli_query($mysql, $sentencia);
    $f = mysqli_num_rows($result);
    $productos = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($productos, array(
            'id' => $row['id_prod'],
            'nombre'  => $row['nombre_prod'],
            'precio'  => $row['precio_prod'],
            'fechafab'  => $row['fecha_fab_prod'],   
            'cantidad'  => $row['cantidad_prod'],   
            'proveedor'  => $row['provedorProducto'],   
        ));
    }
    if ($f > 0) {
        $envio = json_encode(array('estado'=>true, 'productos'=>$productos));
    } else {
        $envio = json_encode(array('estado'=>false));
    }
    echo $envio;
}

///////////////////////------------AÑADIR PRODUCTO---------/////////////////////
if ($post['accion']=='addProducto')
{
$sentencia =sprintf(
    "INSERT INTO productos (nombre_prod, precio_prod, fecha_fab_prod, cantidad_prod, prov_id_prod) 
    values ('%s', '%s', '%s', '%s', '%s')"
,$post['nombre'],$post['precio'],$post['fechafab'],$post['cantidad'],$post['proveedor']);
$result=mysqli_query($mysql,$sentencia);
if($result)
{
    $envio=json_encode(array('estado'=>true));
}
else
{
    $envio=json_encode(array('estado'=>false));
}
echo $envio;
}

///////////////////-----------------------------CARGAR DATOS DEL PRODUCTO---------------//////////////////////////
if ($post['accion'] == 'cargarDatosProducto') {

    $idProducto = $post['idProducto'];
    $sentencia = "SELECT * FROM productos WHERE id_prod = '$idProducto'";
    $result = mysqli_query($mysql, $sentencia);
    $f = mysqli_num_rows($result);
    $datosProducto = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($datosProducto, array(
            'id' => $row['id_prod'],
            'nombre'  => $row['nombre_prod'],
            'precio'  => $row['precio_prod'],
            'fechafab'  => $row['fecha_fab_prod'],   
            'cantidad'  => $row['cantidad_prod'],   
            'proveedor'  => $row['prov_id_prod'],   
        ));
    }
    if ($f > 0) {
        $envio = json_encode(array('estado'=>true, 'datosProducto'=>$datosProducto));
    } else {
        $envio = json_encode(array('estado'=>false));
    }
    echo $envio;
}

/////////////////-----------ACTUALIZAR PRODUCTO--------------///////////
if ($post['accion'] == 'updateProducto') {
    $sentencia = sprintf(
        "UPDATE productos SET nombre_prod='%s', precio_prod='%s', fecha_fab_prod='%s', cantidad_prod='%s', prov_id_prod='%s' WHERE id_prod='%s'",
        $post['nombre'],$post['precio'],$post['fechafab'],$post['cantidad'],$post['idProveedor'],$post['idProducto']
    );
    $result = mysqli_query($mysql, $sentencia);
    if ($result) {
        $envio = json_encode(array('estado' => true));
    } else {
        $envio = json_encode(array('estado' => false));
    }
    echo $envio;
}

////////-----------ELIMINAR PRODUCTO--------------///////////
if ($post['accion']=='deleteProducto')
{
$sentencia =sprintf(
    "DELETE FROM productos WHERE id_prod='%s'",$post['idProducto']);
$result=mysqli_query($mysql,$sentencia);
if($result)
{
    $envio=json_encode(array('estado'=>true));
}
else
{
    $envio=json_encode(array('estado'=>false));
}
echo $envio;
}




?>