// specify the columns
var columnDefs = [
    {headerName: "station_call_letters", field: "station_call_letters", editable: true, rowGroup: true},
    {headerName: "year", field: "year", editable: true, rowGroup: true},
    {headerName: "month", field: "month", editable: true},
    {headerName: "pricing_budget_group", field: "pricing_budget_group", editable: true},
    {headerName: "budget_update_date", field: "budget_update_date", editable: true},
    {headerName: "forecast_date", field: "forecast_date", editable: true},
    {headerName: "budget_amount", field: "budget_amount", editable: true},
    {headerName: "forecast_amount", field: "forecast_amount", editable: true}

];


// specify the data
var rowData = [
    {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": -800000
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": -200000
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": -200000
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": -1300000
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": -500000
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": -500000
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -64788.78002,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -72177.98782,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -78137.94867,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -81394.90961,
   "forecast_amount": -81394.90961
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -82657.58336,
   "forecast_amount": -82657.58336
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -81874.12026,
   "forecast_amount": -81874.12026
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -81278.7015,
   "forecast_amount": -81278.7015
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -88511.53559,
   "forecast_amount": -88511.53559
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -91228.47387,
   "forecast_amount": -91228.47387
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -93104.4086,
   "forecast_amount": -93104.4086
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -95339.22209,
   "forecast_amount": -95339.22209
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -89506.32863,
   "forecast_amount": -89506.32863
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -57510.52839,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -65109.06531,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -75252.01586,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -78103.14585,
   "forecast_amount": -78103.14585
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -84502.59455,
   "forecast_amount": -84502.59455
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -83940.93498,
   "forecast_amount": -83940.93498
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -83654.6805,
   "forecast_amount": -83654.6805
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -89773.38776,
   "forecast_amount": -89773.38776
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -93330.29409,
   "forecast_amount": -93330.29409
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -96394.48931,
   "forecast_amount": -96394.48931
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -96825.14327,
   "forecast_amount": -96825.14327
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": -95603.72013,
   "forecast_amount": -95603.72013
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "Corporate Hedge",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 89948.43,
   "forecast_amount": 113191.54
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 92020.5,
   "forecast_amount": 104398
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 103031.28,
   "forecast_amount": 110397
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 102885.75,
   "forecast_amount": 98010
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 111060.18,
   "forecast_amount": 99000
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 101054.25,
   "forecast_amount": 94050
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 95362.74,
   "forecast_amount": 95362.74
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 150105.78,
   "forecast_amount": 150105.78
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 111261.15,
   "forecast_amount": 111261.15
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 122835.24,
   "forecast_amount": 122835.24
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 112064.04,
   "forecast_amount": 112064.04
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 95100.39,
   "forecast_amount": 95100.39
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 107626.792,
   "forecast_amount": 102798.05
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 110519.656,
   "forecast_amount": 102259.9
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 122866.692,
   "forecast_amount": 124462.11
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 117826.904,
   "forecast_amount": 93860
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 95021.888,
   "forecast_amount": 97318
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 111162.844,
   "forecast_amount": 93860
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 105913.6,
   "forecast_amount": 105913.6
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 151963.292,
   "forecast_amount": 151963.292
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 115123.736,
   "forecast_amount": 115123.736
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 128662.3,
   "forecast_amount": 128662.3
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 129549.524,
   "forecast_amount": 129549.524
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 119789.072,
   "forecast_amount": 119789.072
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 250,
   "forecast_amount": 250
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 1250,
   "forecast_amount": 1250
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 500,
   "forecast_amount": 500
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 1000,
   "forecast_amount": 1000
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 4000
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 8000,
   "forecast_amount": 8000
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 2000,
   "forecast_amount": 2000
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASY",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 190382.808,
   "forecast_amount": 225096
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 191990.106,
   "forecast_amount": 196794.74
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 245128.352,
   "forecast_amount": 220144
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 270228.84,
   "forecast_amount": 203770
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 251742.428,
   "forecast_amount": 217686
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 264530.238,
   "forecast_amount": 198800
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 279723.528,
   "forecast_amount": 279723.528
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 333151.028,
   "forecast_amount": 333151.028
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 325229.842,
   "forecast_amount": 325229.842
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 277271.33,
   "forecast_amount": 277271.33
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 277271.33,
   "forecast_amount": 277271.33
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 206957.758,
   "forecast_amount": 206957.758
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 241735.52,
   "forecast_amount": 193172.51
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 229947.584,
   "forecast_amount": 202244.02
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 254824.96,
   "forecast_amount": 254117.41
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 252406.464,
   "forecast_amount": 188480
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 245363.264,
   "forecast_amount": 188480
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 227737.408,
   "forecast_amount": 172608
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 209262.4,
   "forecast_amount": 209262.4
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 240769.312,
   "forecast_amount": 240769.312
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 236475.936,
   "forecast_amount": 236475.936
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 254675.168,
   "forecast_amount": 254675.168
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 268041.376,
   "forecast_amount": 268041.376
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 211792,
   "forecast_amount": 211792
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 2000,
   "forecast_amount": 1000
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 12000,
   "forecast_amount": 3000
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 2000,
   "forecast_amount": 1000
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 5000,
   "forecast_amount": 5000
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 23000,
   "forecast_amount": 23000
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 55000,
   "forecast_amount": 55000
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 10000,
   "forecast_amount": 10000
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 1000,
   "forecast_amount": 1332.5
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1291
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1408.5
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 3000,
   "forecast_amount": 1300
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 2300
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1400
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 3000,
   "forecast_amount": 1300
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1300
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1400
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1300
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1300
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 4000,
   "forecast_amount": 1400
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KWBQ",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National Partnership",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 490891.2,
   "forecast_amount": 396172.16
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 422603.904,
   "forecast_amount": 371071.55
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 476337.568,
   "forecast_amount": 375409.65
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 421190.304,
   "forecast_amount": 421190.304
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 429513.184,
   "forecast_amount": 406720
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 366088.672,
   "forecast_amount": 396800
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 339241.184,
   "forecast_amount": 339241.184
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 438836.992,
   "forecast_amount": 438836.992
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 489674.016,
   "forecast_amount": 489674.016
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 455884.512,
   "forecast_amount": 455884.512
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 509829.472,
   "forecast_amount": 509829.472
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 470021.504,
   "forecast_amount": 470021.504
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 544914.735,
   "forecast_amount": 533690.99
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 470382.27,
   "forecast_amount": 410825.5
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 556754.24,
   "forecast_amount": 520150.5
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 530333.01,
   "forecast_amount": 522375
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 573163.78,
   "forecast_amount": 572125
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 525267.465,
   "forecast_amount": 510435
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 431986.215,
   "forecast_amount": 431986.215
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 468013.175,
   "forecast_amount": 468013.175
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 500469.08,
   "forecast_amount": 500469.08
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 587373.375,
   "forecast_amount": 587373.375
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 609850.425,
   "forecast_amount": 609850.425
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Core",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 568531.06,
   "forecast_amount": 568531.06
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 2000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 20000,
   "forecast_amount": 8000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 54000,
   "forecast_amount": 9000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 14000,
   "forecast_amount": 8000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 33000,
   "forecast_amount": 33000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 143000,
   "forecast_amount": 143000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 329000,
   "forecast_amount": 329000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 56000,
   "forecast_amount": 56000
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "National - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Local - Political",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 3000,
   "forecast_amount": 980
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 8000,
   "forecast_amount": 1140
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 8000,
   "forecast_amount": 1523
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 4,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 8000,
   "forecast_amount": 660
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 5,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 9000,
   "forecast_amount": 1660
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 6,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 8000,
   "forecast_amount": 1680
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 7,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 8000,
   "forecast_amount": 660
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 8,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 9000,
   "forecast_amount": 660
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 9,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 8000,
   "forecast_amount": 680
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 10,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 9000,
   "forecast_amount": 660
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 11,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 9000,
   "forecast_amount": 660
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 12,
   "pricing_budget_group": "Website",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 9000,
   "forecast_amount": 680
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 1,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 2,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 },
 {
   "station_call_letters": "KASA",
   "year": 2016,
   "month": 3,
   "pricing_budget_group": "Synergy",
   "budget_update_date": "5/12/2016",
   "forecast_date": "5/12/2016",
   "budget_amount": 0,
   "forecast_amount": 0
 }
];

// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    enableSorting: true,
    enableFilter: true,
    rowSelection: 'multiple',
    enableColResize: true,
    enableRangeSelection: true,
    editType: 'fullRow',
    onGridReady: function (params) {
        params.api.sizeColumnsToFit();
    }
};

// wait for the document to be loaded, otherwise
// ag-Grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function() {

    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
});