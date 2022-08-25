---
slug: how-to-i2c-bus
title: "How to: I²C Bus"
---
import Image from '@theme/IdealImage';

# How to: I²C Bus

This chapter will demonstrate how to interface I²C target devices (CHESTER is I²C controller on the bus).

:::caution

From the Zephyr perspective, the correct way to interface I²C target devices, is to create a proper device driver following the [Zephyr device driver model](https://docs.zephyrproject.org/latest/kernel/drivers/index.html).

However, for simple proof-of-concept purposes, the following guide can be used.

:::

## Code Example

Enable the I²C bus in the file `prj.conf`:

```
CONFIG_I2C=y
```

Include the required files in your implementation file:

```c
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/i2c.h>
#include <stderr.h>
#include <stdint.h>
```

This is an example function to read a single data byte from a specific register:

```c
static int read(uint8_t devaddr, uint8_t regaddr, uint8_t *regval)
{
	int ret;

	const struct device *dev = DEVICE_DT_GET(DT_NODELABEL(i2c0));

	if (!device_is_ready(dev)) {
		LOG_ERR("Device not ready");
		return -ENODEV;
	}

	ret = i2c_write_read(dev, devaddr, &regaddr, 1, regval, 1);
	if (ret) {
		LOG_ERR("Call `i2c_write_read` failed: %d", ret);
		return ret;
	}

	return 0;
}
```

This is an example function to write a single data byte from a specific register:

```c
static int write(uint8_t devaddr, uint8_t regaddr, uint8_t regval)
{
	int ret;

	const struct device *dev = DEVICE_DT_GET(DT_NODELABEL(i2c0));

	if (!device_is_ready(dev)) {
		LOG_ERR("Device not ready");
		return -ENODEV;
	}

	uint8_t buf[2] = { regaddr, regval };

	ret = i2c_write(dev, buf, 2, devaddr);
	if (ret) {
		LOG_ERR("Call `i2c_write` failed: %d", ret);
		return ret;
	}

	return 0;
}
```

## References

If you need more details on the Zephyr I²C API, see the Zephyr API documentation:
https://docs.zephyrproject.org/latest/hardware/peripherals/i2c.html
