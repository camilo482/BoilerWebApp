"use strict";

// Varibles globales

var p320_1 = "7MF0340-1GL01-5AM2-Z A00+E01+H02+U03 <br /><br />";
var p320_2 = "7MF0340-1HL01-5AM2-Z A00+E01+H02+U03 <br /><br />";
var lg270_1 = "7ML5883-0AE01-0AB0-Z A00+B00+C01+E01+L05+M03 <br />";
var lg270_2 = "7ML5883-0AE01-0AB1-Z A00+B00+C01+E01+L05+M03 <br />";
var logo_1 = "LOGO: 6ED1052-1MD08-0BA0 + Module AO: 6ED1055-1MM00-0BA2 <br />";
var logo_2 =
  "LOGO: 6ED1052-1MD08-0BA0 + AO: 6ED1055-1MM00-0BA2 + Fuente: 6EP3332-6SB00-0AY0 <br />";
var plc_1 = "6ES7215-1AG40-0XB0 <br /><br />";
var plc_2 = "PLC: 6ES7215-1AG40-0XB0 + Fuente: 6EP3332-7SB00-0AX0 <br />";
var vfd_1 = "MP: 6SL3210-1PC22-8UL0 + CU: 6SL3244-0BB12-1BA1-Z0 <br />";
var vfd_2 = "MP: 6SL3210-1PC24-2UL0 + CU: 6SL3244-0BB12-1BA1-Z0 <br />";
var valve_1 = "7MV0555-1BB25-1SS0 <br /><br />";
var valve_2 = "7MV0566-1BB25-1SS0 <br /><br />";
var ref1 =
  "<strong>La referencia del transmisor de presión es: </strong><br /><br />";
var ref2 =
  "<strong>La referencia del transmisor de radar es: </strong><br /><br />";
var ref3 = "<strong>Las referencias para el Logo son: </strong><br /><br />";
var ref4 = "<strong>La referencia del PLC es: </strong><br /><br />";
var ref5 = "<strong>Las referencia para el PLC son: </strong><br /><br />";
var ref6 = "<strong>Las referencias para el VFD son: </strong><br /><br />";
var ref7 = "<strong>La referencia de la valvula es: </strong><br /><br />";

// Funcion capturar daros

var box_sensor = " ";
var box_control = " ";
var box_actuador = " ";
function capturarDatos() {
  console.log("Capturando datos");
  box_sensor = document.getElementById("sele-sensor").value;
  console.log(box_sensor);
  box_control = document.getElementById("sele-control").value;
  console.log(box_control);
  box_actuador = document.getElementById("sele-actuador").value;
  console.log(box_actuador);
  return true;
}

function primeraSeleccion() {
  console.log("Me has dado click");
  if (box_sensor == "presion") {
    var titulo_sensor = document.querySelector("#titulo-sensor");
    titulo_sensor.innerHTML = "<strong>Transmisor de presión: </strong>";
    var sensor_1 = document.querySelector("#sensor1");
    sensor_1.innerHTML = "De 100 inH2O con Manifold de 5 vias";
    var sensor_2 = document.querySelector("#sensor2");
    sensor_2.innerHTML = "De 240 inH2O con Manifold de 5 vias";
  } else {
    var titulo_sensor = document.querySelector("#titulo-sensor");
    titulo_sensor.innerHTML = "<strong>Medidor de nivel de Radar: </strong>";
    var sensor_1 = document.querySelector("#sensor1");
    sensor_1.innerHTML = "Sonda de 30 centimetros";
    var sensor_2 = document.querySelector("#sensor2");
    sensor_2.innerHTML = "Sonda de 50 centimetros";
  }
  if (box_control == "logo") {
    var titulo_control = document.querySelector("#titulo-control");
    titulo_control.innerHTML = "<strong>LOGO!: </strong>";
    var control_1 = document.querySelector("#control1");
    control_1.innerHTML = "De 24V + Modulo AO";
    var control_2 = document.querySelector("#control2");
    control_2.innerHTML = "De 24V + Modulo AO + Fuente";
  } else {
    var titulo_control = document.querySelector("#titulo-control");
    titulo_control.innerHTML = "<strong>S7-1200: </strong>";
    var control_1 = document.querySelector("#control1");
    control_1.innerHTML = "De 24V";
    var control_2 = document.querySelector("#control2");
    control_2.innerHTML = "De 24V + Fuente";
  }
  if (box_actuador == "vfd") {
    var titulo_actuador = document.querySelector("#titulo-actuador");
    titulo_actuador.innerHTML = "<strong>G120: </strong>";
    var actuador_1 = document.querySelector("#actuador1");
    actuador_1.innerHTML = "(220 VA)(10 HP)(28 A Max Output)";
    var actuador_2 = document.querySelector("#actuador2");
    actuador_2.innerHTML = "(220 VA)(15 HP)(42 A Max Output)";
  } else {
    var titulo_actuador = document.querySelector("#titulo-actuador");
    titulo_actuador.innerHTML = "<strong>Bray: </strong>";
    var actuador_1 = document.querySelector("#actuador1");
    actuador_1.innerHTML = "De 2.5 in / Flow Range: 50 - 550 m3/h";
    var actuador_2 = document.querySelector("#actuador2");
    actuador_2.innerHTML = "De 2.5 in / Flow Range: 60 - 660 m3/h";
  }
  return true;
}

var box_sensor1 = " ";
var box_control1 = " ";
var box_actuador1 = " ";
function capturarDatos2() {
  console.log("Capturando datos");
  box_sensor1 = document.getElementById("sele1-sensor").value;
  console.log(box_sensor1);
  box_control1 = document.getElementById("sele1-control").value;
  console.log(box_control1);
  box_actuador1 = document.getElementById("sele1-actuador").value;
  console.log(box_actuador1);
  return true;
}

function segundaSeleccion() {
  console.log("Me has dado click");
  var salida_sensor = document.querySelector("#salida-sensor");
  var salida_control = document.querySelector("#salida-control");
  var salida_actuador = document.querySelector("#salida-actuador");
  var sensor_img = document.querySelector("#sensor_img");
  var control_img = document.querySelector("#control_img");
  var actuador_img = document.querySelector("#actuador_img");
  var sensor_pdf = document.querySelector("#sensor_pdf");
  var control_pdf = document.querySelector("#control_pdf");
  var actuador_pdf = document.querySelector("#actuador_pdf");
  switch (true) {
    case box_sensor == "presion" && box_sensor1 == "S1":
      salida_sensor.innerHTML = ref1 + p320_1;
      sensor_img.src = "17-siemens/P320.jpg";
      sensor_pdf.innerHTML = "Descargar";
      sensor_pdf.href = "17-siemens/P320 100 in.pdf";
      sensor_pdf.style.display = "inline";
      break;
    case box_sensor == "presion" && box_sensor1 == "S2":
      salida_sensor.innerHTML = ref1 + p320_2;
      sensor_img.src = "17-siemens/P320.jpg";
      sensor_pdf.innerHTML = "Descargar";
      sensor_pdf.href = "17-siemens/P320 240 in.pdf";
      sensor_pdf.style.display = "inline";
      break;
    case box_sensor == "radar" && box_sensor1 == "S1":
      salida_sensor.innerHTML = ref2 + lg270_1;
      sensor_img.src = "17-siemens/LG270.jpg";
      sensor_pdf.innerHTML = "Descargar";
      sensor_pdf.href = "17-siemens/LG270 30 cm.pdf";
      sensor_pdf.style.display = "inline";
      break;
    case box_sensor == "radar" && box_sensor1 == "S2":
      salida_sensor.innerHTML = ref2 + lg270_2;
      sensor_img.src = "17-siemens/LG270.jpg";
      sensor_pdf.innerHTML = "Descargar";
      sensor_pdf.href = "17-siemens/LG270 50 cm.pdf";
      sensor_pdf.style.display = "inline";
      break;
    default:
      alert("Error");
  }
  switch (true) {
    case box_control == "logo" && box_control1 == "C1":
      salida_control.innerHTML = ref3 + logo_1;
      control_img.src = "17-siemens/LOGO.jpg";
      control_pdf.innerHTML = "Descargar";
      control_pdf.href = "17-siemens/LOGO.pdf";
      control_pdf.style.display = "inline";
      break;
    case box_control == "logo" && box_control1 == "C2":
      salida_control.innerHTML = ref3 + logo_2;
      control_img.src = "17-siemens/LOGO.jpg";
      control_pdf.innerHTML = "Descargar";
      control_pdf.href = "17-siemens/LOGO.pdf";
      control_pdf.style.display = "inline";
      break;
    case box_control == "plc" && box_control1 == "C1":
      salida_control.innerHTML = ref4 + plc_1;
      control_img.src = "17-siemens/PLC.jpg";
      control_pdf.innerHTML = "Descargar";
      control_pdf.href = "17-siemens/S7-1200.pdf";
      control_pdf.style.display = "inline";
      break;
    case box_control == "plc" && box_control1 == "C2":
      salida_control.innerHTML = ref5 + plc_2;
      control_img.src = "17-siemens/PLC.jpg";
      control_pdf.innerHTML = "Descargar";
      control_pdf.href = "17-siemens/S7-1200.pdf";
      control_pdf.style.display = "inline";
      break;
    default:
      alert("Error");
  }
  switch (true) {
    case box_actuador == "vfd" && box_actuador1 == "A1":
      salida_actuador.innerHTML = ref6 + vfd_1;
      actuador_img.src = "17-siemens/VFD.jpg";
      actuador_pdf.innerHTML = "Descargar";
      actuador_pdf.href = "17-siemens/VFD1.pdf";
      actuador_pdf.style.display = "inline";
      break;
    case box_actuador == "vfd" && box_actuador1 == "A2":
      salida_actuador.innerHTML = ref6 + vfd_2;
      actuador_img.src = "17-siemens/VFD.jpg";
      actuador_pdf.innerHTML = "Descargar";
      actuador_pdf.href = "17-siemens/VFD1.pdf";
      actuador_pdf.style.display = "inline";
      break;
    case box_actuador == "valvula" && box_actuador1 == "A1":
      salida_actuador.innerHTML = ref7 + valve_1;
      actuador_img.src = "17-siemens/VALVULA.jpg";
      actuador_pdf.innerHTML = "Descargar";
      actuador_pdf.href = "17-siemens/VALVE1.pdf";
      actuador_pdf.style.display = "inline";
      break;
    case box_actuador == "valvula" && box_actuador1 == "A2":
      salida_actuador.innerHTML = ref7 + valve_2;
      actuador_img.src = "17-siemens/VALVULA.jpg";
      actuador_pdf.innerHTML = "Descargar";
      actuador_pdf.href = "17-siemens/VALVE1.pdf";
      actuador_pdf.style.display = "inline";
      break;
    default:
      alert("Error");
  }
  return true;
}

function imprimirDatos() {
  var parrafo = document.querySelector("#salida");
  parrafo.innerHTML =
    "Su nombre es: " +
    box_name +
    " <br />" +
    "Su apellido es: " +
    box_lastname +
    " <br />" +
    "Su edad es: " +
    box_edad +
    " <br />";
  return true;
}

var boton_emp = document.querySelector("#boton-emp");
// Click
boton_emp.addEventListener("click", function () {
  capturarDatos();
  primeraSeleccion();
});

var boton_sel = document.querySelector("#boton-sel");
// Click
boton_sel.addEventListener("click", function () {
  capturarDatos2();
  segundaSeleccion();
});
