import React,{Component} from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native';

class Layout extends Component {
    constructor(){
        super();
        this.state={
            resultText:"",
            calculationText:""
            
        };
    }

    calculate(){
        const text= this.state.resultText
        this.setState({calculationText: eval(text)})
    }
    operate(operation){
        switch(operation){
            case 'DEL':
                const text= this.state.resultText.split('')
                text.pop()
                this.setState({
                    resultText:text.join('')
                })
                break
            case '*':

            case '-':

            case '+':

            case '/':
                if(this.state.text='') return
                this.setState({
                    resultText:this.state.resultText+operation
                })

        }

    }

    validate(){
        const text=this.state.resultText;
        switch(text.slice(-1)){
            case '+':
            case '-':
            case '/':
            case '*':
                return false
        }
        return true

    }
    buttonPressed(text){
        
           if(text=='='){
               return this.validate()&&this.calculate()
           }else{
                this.setState({
                    resultText: this.state.resultText+text
                 })
                }
    }
    

    render(){
    let rows=[];
    let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];
    for(let i=0;i<4;i++){
        let row=[];
        for(let j=0;j<3;j++){
            row.push(<TouchableOpacity onPress={()=>this.buttonPressed(nums[i][j])} key={Math.random()}><Text style={styles.btn}>{nums[i][j]}</Text></TouchableOpacity>)
        }
    rows.push(<View key={Math.random()} style={styles.row}>{row}</View>)
    }

    let operations=['DEL','/','-','+','*'];
    let ops=[];
    for(let i=0;i<5;i++){
        ops.push(<TouchableOpacity key={Math.random()} onPress={()=>this.operate(operations[i])}><Text style={styles.operationBtn}>{operations[i]}</Text></TouchableOpacity>);
      
    }

    

    return (
        <View style={styles.container}>
            <View style={styles.output}><Text style={styles.resultText}>{this.state.resultText}</Text></View>
  <View style={styles.input}><Text style={styles.calculationText}>{this.state.calculationText}</Text></View>
  
  <View style={styles.pad}>
    <View style={styles.numberPad}>
        {rows}
    </View>
    <View style={styles.calculationPad}>
        <View style={styles.calRow}>
          {ops}
    </View>
    </View>
  </View>
  </View>
    );
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
   
},
white:{
    color:'#fff'
},
resultText:{
    fontSize:40,
    color:'#fff',
   
},
calculationText:{
    fontSize:18,
    color:'#fff'
},
input:{
    flex:1,
    backgroundColor:'#414141',
    justifyContent:'center',
    alignItems:'flex-end'
},
output:{
    flex:2,
    backgroundColor:'#838383',
    justifyContent:'center',
    alignItems:'flex-end'
   

},
pad:{
    flex: 9,
    flexDirection:'row',
},
numberPad:{
   flex:3,
    backgroundColor:'#fff'
},
calculationPad:{
    flex:1,
    backgroundColor:'#000'
   
},
row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    fontSize:15
},
calRow:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    fontSize:15,
    
},
operationBtn:{
    color:'#fff',
    fontSize:30,
    
},
btn:{
    fontSize:30
}

})
export default Layout;