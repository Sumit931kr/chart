
import ReactECharts from 'echarts-for-react';


const Bar = (props) => {

    let first = 0, second = 0, third = 0;
    let firstcount = 0, secondcount = 0, thirdcount = 0;
    var a;
    const dataa = props.dataa;
    function dd() {
        a = dataa.map((element, index) => {
            if (element.Alcohol == 1) {
                firstcount++;
                first = first + element['Malic Acid'];
            }
            if (element.Alcohol == 2) {
                secondcount++;
                second = second + element['Malic Acid'];
            }
            if (element.Alcohol == 3) {
                thirdcount++;
                third = third + element['Malic Acid'];
            }
        })
    }
    dd();
    first = first / firstcount;
    second = second /secondcount;
    third = third / thirdcount;

    const options = {
        grid: { top: 28, right: 30, bottom: 4, left: 30 },
        xAxis: { type: 'value', },
        yAxis: { type: 'value' },
        series: [
            {
                data: [first,second,third],
                type: 'bar',
                barWidth: '50%',
            }
        ]
    };
    return <ReactECharts option={options} />;
}
export default Bar;
