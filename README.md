This app simply displays different timezone clocks on a single page.

useState and useEffect are used to achieve this.
The parent component ClockDashBoard calls the child component, CityTime, to format
and update the time constantly.

CityTime makes use of setInterval and clearInterval to update the time every one second.

The overall state is managed in the variables time and setTime.
