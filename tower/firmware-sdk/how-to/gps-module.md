---
slug: how-to-gps-module
title: "How To: GPS Module"
---
import Image from '@theme/IdealImage';

GPS Module can be used for getting **position**, **time**, **date** and **altitude**.

## References
- [**GPS SDK Module**](https://sdk.hardwario.com/group__twr__module__gps.html)
- [**GitHub Repository Example**](https://github.com/hardwario/twr-sdk/blob/master/_examples/gps/application.c)

Thanks to the **SDK**, setting up and using the GPS Module **is very simple**. You have to do only two things:

1. Initialize the GPS Module
2. Program the **event handler** (what should happen when GPS Module gets updated)

:::info

This example will send the date, time, position, number of satellites the module sees and fix quality with the use of `twr_log` over the UART to the PC.

:::

<details>
<summary>
<b>
GPS function Code Example
</b>
</summary>
<p>

  ```c showLineNumbers
  #include <application.h>

  twr_led_t led;
  twr_led_t gps_led_r;
  twr_led_t gps_led_g;

  void gps_module_event_handler(twr_module_gps_event_t event, void *event_param)
  {
      if (event == TWR_MODULE_GPS_EVENT_START)
      {
          twr_log_info("APP: Event TWR_MODULE_GPS_EVENT_START");

          twr_led_set_mode(&gps_led_g, TWR_LED_MODE_ON);
      }

      else if (event == TWR_MODULE_GPS_EVENT_STOP)
      {
          twr_log_info("APP: Event TWR_MODULE_GPS_EVENT_STOP");

          twr_led_set_mode(&gps_led_g, TWR_LED_MODE_OFF);
      }

      else if (event == TWR_MODULE_GPS_EVENT_UPDATE)
      {
          twr_led_pulse(&gps_led_r, 50);

          twr_module_gps_time_t time;

          if (twr_module_gps_get_time(&time))
          {
              twr_log_info("APP: Date: %04d-%02d-%02d",
                          time.year, time.month, time.day);

              twr_log_info("APP: Time: %02d:%02d:%02d",
                          time.hours, time.minutes, time.seconds);
          }

          twr_module_gps_position_t position;

          if (twr_module_gps_get_position(&position))
          {
              twr_log_info("APP: Lat: %03.5f", position.latitude);
              twr_log_info("APP: Lon: %03.5f", position.longitude);
          }

          twr_module_gps_altitude_t altitude;

          if (twr_module_gps_get_altitude(&altitude))
          {
              twr_log_info("APP: Altitude: %.1f %c", altitude.altitude, tolower(altitude.units));
          }

          twr_module_gps_quality_t quality;

          if (twr_module_gps_get_quality(&quality))
          {
              twr_log_info("APP: Fix quality: %d", quality.fix_quality);
              twr_log_info("APP: Satellites: %d", quality.satellites_tracked);
          }

          twr_module_gps_invalidate();
      }

      else if (event == TWR_MODULE_GPS_EVENT_ERROR)
      {
          twr_log_info("APP: Event TWR_MODULE_GPS_EVENT_ERROR");
      }
  }

  void application_init(void)
  {
      twr_log_init(TWR_LOG_LEVEL_DUMP, TWR_LOG_TIMESTAMP_ABS);

      twr_led_init(&led, TWR_GPIO_LED, false, false);
      twr_led_set_mode(&led, TWR_LED_MODE_ON);

      if (!twr_module_gps_init())
      {
          twr_log_error("APP: GPS Module initialization failed");
      }

      else
      {
          twr_module_gps_set_event_handler(gps_module_event_handler, NULL);
          twr_module_gps_start();
      }

      twr_led_init_virtual(&gps_led_r, TWR_MODULE_GPS_LED_RED, twr_module_gps_get_led_driver(), 0);
      twr_led_init_virtual(&gps_led_g, TWR_MODULE_GPS_LED_GREEN, twr_module_gps_get_led_driver(), 0);
  }
  ```

</p>
</details>
