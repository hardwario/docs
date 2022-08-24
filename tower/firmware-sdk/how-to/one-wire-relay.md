---
slug: how-to-one-wire-relay
title: "How To: 1-Wire Relay"
---

To make it easier to work with certain 1-Wire devices we implemented a module called twr_onewire_relay which allows you to control relay modules connected via 1-Wire bus, for example, the Relay module developed by Denkovi.

```c showLineNumbers
#include <application.h>

twr_onewire_relay_t relay;
twr_button_t button;

twr_onewire_relay_channel_t relays[] = {
        TWR_ONEWIRE_RELAY_CHANNEL_Q1,
        TWR_ONEWIRE_RELAY_CHANNEL_Q2,
        TWR_ONEWIRE_RELAY_CHANNEL_Q3,
        TWR_ONEWIRE_RELAY_CHANNEL_Q4,
        TWR_ONEWIRE_RELAY_CHANNEL_Q5,
        TWR_ONEWIRE_RELAY_CHANNEL_Q6,
        TWR_ONEWIRE_RELAY_CHANNEL_Q7,
        TWR_ONEWIRE_RELAY_CHANNEL_Q8
};

int activated = 0;

void button_event_handler(twr_button_t *self, twr_button_event_t event, void *event_param)
{
    (void) self;
    (void) event_param;

    if (event == TWR_BUTTON_EVENT_PRESS)
    {
        if (activated == 8) {
            for (int i = 0; i < 8; ++i) {
                twr_onewire_relay_set_state(&relay, relays[i], false);
            }

            activated = 0;
        } else {
            twr_onewire_relay_set_state(&relay, relays[activated], true);
            activated++;
        }
    }
}

void application_init(void)
{
    twr_onewire_relay_init(&relay, TWR_GPIO_P4, 0x00);

    twr_button_init(&button, TWR_GPIO_BUTTON, TWR_GPIO_PULL_DOWN, 0);
    twr_button_set_event_handler(&button, button_event_handler, NULL);
}
```
