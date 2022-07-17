import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {

    @action
        enables(){
                if (document.getElementById("name").value === "") {
                   document.getElementById("Btn").disabled = true; //button remains disabled
                } else {
                    document.getElementById("Btn").disabled = false; //button is enabled
                }
        }

    @action
        open(){
            window.name = document.getElementById("name").value;
            
            this.transitionToRoute("Message");
        }
}
