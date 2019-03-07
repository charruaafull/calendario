import {Component, OnInit} from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

    public fecha;
    today = new Date();
    public disabled = [
        {
            year: this.today.getFullYear(),
            month: this.today.getMonth(),
            day: this.today.getDate(),
        },
        {
            year: 2019,
            month: 3,
            day: 9
        }, {year: 2019, month: 3, day: 12}, {
            year: 2019,
            month: 3,
            day: 15
        }];

    myOptions: INgxMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
        disableDates: this.disabled,
        disableWeekdays: ['su'],
        yearSelector: false,
        disableHeaderButtons: true,
        showTodayBtn: false,
        focusInputOnDateSelect: true,
        disableUntil: {year: 2019, month: 3, day: 7},
        disableSince: {year: 2019, month: 4, day: 7},
        disableDateRanges: [{begin: {year: 2000, month: 11, day: 14}, end: {year: 2019, month: 3, day: 7}}],
        dayLabels: {su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab'},
        monthLabels: {
            1: 'Ene',
            2: 'Feb',
            3: 'Mar',
            4: 'Abr',
            5: 'May',
            6: 'Jun',
            7: 'Jul',
            8: 'Ago',
            9: 'Sep',
            10: 'Oct',
            11: 'Nov',
            12: 'Dic'
        }
    };

    constructor() {
        this.fecha = (this.fecha) ? this.fecha : 'Seleccione una fecha';
    }

    onDateChanged(event: IMyDateModel): void {
        let day = event.date.day;
        let month = event.date.month;
        let year = event.date.year;
        let fecha = day + '/' + month + '/' + year;
        this.fecha = fecha;
    }

    ngOnInit() {
    }

    test() {
        this.disabled.push(
            {
                year: 2019,
                month: 3,
                day: 16
            }
        )
    }

}
