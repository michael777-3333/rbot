function robotComponent() {
    return {
        abc: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ñ', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        robotList: [],
        nameRobotDelete:'',
        alert:'',
        message:'Borra tu Robot',
        getNameRobot:'',
        showAlert:null,
        createRobot() {
            let letter = Math.floor(Math.random() * this.abc.length);
            let letter2 = Math.floor(Math.random() * this.abc.length);
            let digits = Math.floor(Math.random() * 999);
            let nameRobot = `${this.abc[letter].toUpperCase()}${this.abc[letter2].toUpperCase()}${digits}`;
            return nameRobot;
        },
        addRobot() {
            getNameRobot = this.createRobot();
            while (this.robotList.includes(getNameRobot)) {
                getNameRobot = this.createRobot();
            }
            this.robotList.push(getNameRobot);
            this.showAlert=false
            this.alert=`Se agregó este Robot: ${getNameRobot}`
            this.delayalert()
        },
        deleteRobot() {
            if(this.robotList.some(robot=>robot===this.nameRobotDelete) ){
                this.robotList= this.robotList.filter(robot=>robot!==this.nameRobotDelete)
                this.addRobot()
                this.nameRobotDelete=''
            }else{
                this.showAlert=true
                this.alert='el nombre de tu robot no existe'
                this.delayalert()
            }
        },
        delayalert(){
            setTimeout(() => {
                this.alert=''
            }, 3000);
        }
       
    };
}
