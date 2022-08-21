
import ReactECharts from 'echarts-for-react';


const Scatter = (props) => {
    var a;
    const dataa = props.dataa;
    function dd() {
      a = dataa.map((element, index) => {
            return [element['Color intensity'] ,element.Hue ];
        })
    }
    dd();
    const options = {
        grid: { top: 28, right: 30, bottom: 4, left: 30 },
        xAxis: { type: 'category'},
        yAxis: { type: 'value' },
        series: [{
            symbolSize: 7,
            data: a,
            type: 'scatter',
        }]
    };
    return <ReactECharts option={options} />;
}
export default Scatter;
