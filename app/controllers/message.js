import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MessageController extends Controller {


    @action
        enable(){
                if (document.getElementById("msg").value === "") {
                   document.getElementById("Btn").disabled = true; //button remains disabled
                } else {
                    document.getElementById("Btn").disabled = false; //button is enabled
                }
        }

    @action
        send(){
            var name = window.name;
            // var Msg = document.getElementById("msg").value;
            var url = "SendMessage?Uname=" + name + "&Msg=" + document.getElementById("msg").value;

            var request = new XMLHttpRequest();
            try {
                request.onreadystatechange = function () {
                    if(this.readyState === 4){
                    var val = this.responseText;
                    document.getElementById('msg').value = "";
                    }
                }
                request.open("POST", url, true);
                request.send();
            }
            catch (e) {
                alert("Unable to connect to server");
            }

            var url = "ReadMessage";

            var request = new XMLHttpRequest();
            try {
                request.onreadystatechange = function () {
                    if(this.readyState === 4){
                    var val = this.responseText;
                   // alter("send");
                    document.getElementById('sample').innerHTML = val;

                    }
                }
                request.open("GET", url, true);
                request.send();
            }
            catch (e) {
                alert("Unable to connect to server");
            }

            var elem1 = document.getElementById('ToTop');
            elem1.scrollTop = elem1.scrollHeight;
        }
}
