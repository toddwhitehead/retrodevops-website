+++
title = "Connecting a real C64 in 2019"
date = "2019-10-16"
author = "Todd Whitehead"
tags = ["getting-started", "real-c64"]
featured_image =  "/images/c64-with-box.jpg"
description = "Explains the equipment and perils to successfully connect and run a Commodore 64 in 2019"
showFullContent = false
+++

{{< figure src="/images/c64-with-box.jpg" title="A commodore 64 deplayed with its box" >}}

## Power Supply
Replacing the power supply for a C64 is one of the most critical steps to ensuring it's survival. Any 35+ year old power unit would be a cause for concern but the C64's is particulalrly dangerous. The original power supplies were built cheap and lack any form of over-volatge protection. This means they have a high failure rate and such a failure is likely to fry your pride and joy. Luckily there are a few modern options.

Hands down my pick is Ray Carlsens which are well designed and rugged. Your can also order one with an IEC plug which means I can just plug in an Australian power cord and I'm good to go. You can also order custom units from Ray such as a combined C64, 128 or Amiga power supplies.

{{< figure src="/images/ray-power.png" title="A Ray Carlsen C64 Power Supply" >}}

[https://www.carlsenelectronics.net/](https://www.carlsenelectronics.net/)

## Video Connection

Connecting the C64 to a modern LCD display can be tricky and frustrating to get a high quality picture. The best solution I have found requires:

1. [Commodore 64 Super Video AV Adapter](https://www.ebay.com.au/itm/Commodore-64-128-C64-C64C-Super-Video-AV-Adapter-S-Video-Composite-2ch-Audio/223328944104?hash=item33ff713fe8:g:35QAAOSwa1hcFFiS&frcectupt=true) 
2. [RetroTINK 2x](https://www.retrorgb.com/retrotink2x.html)

The [Commodore 64 Super Video AV Adapter](https://www.ebay.com.au/itm/Commodore-64-128-C64-C64C-Super-Video-AV-Adapter-S-Video-Composite-2ch-Audio/223328944104?hash=item33ff713fe8:g:35QAAOSwa1hcFFiS&frcectupt=true)  connects directly into the C64's DIN connection and then provides those signals using standard RCA Audio, Composite Video and s-video connections. It also provides an adjustable control to modify the strength of the signal sent to the s-video connection which allows much higher quality signal. The Super AV can connect to the RetroTINK2x via either composite or s-video with the later providing signifcantly better image quality.

{{< figure src="/images/superav.png" title="Super AV Adapter for the C64" >}}

Although we now have a good quality signal, it is only providing a refesh rate of 15Hz which is too slow for modern displays. This is where the [RetroTINK 2x](https://www.retrorgb.com/retrotink2x.html) comes in. It is a zero lag, 480p HDMI scaler for retro game consoles and comuuters like the C64. The RetroTINK 2x has composite (cvbs), S-Video (Y/C) and Component Video (YPbPr) inputs that are then processed and 480p signal is output via a HDMI connection that can be connected directly to a modern display.

{{< figure src="/images/retrotink2x.jpg" title="The RetroTINK 2x" >}}

## Storage Device

Back in the day, the C64 used both disk and tape based storage. Whilst they are part of the whole experience they are notoriously slow and in the case of disks, have very limited capacity. Luckily thers' a range of mder alternatives.

The SD2IEC is opensource hardware and firmware that provides a mass storage device using an SD card that provides a replacement for the C64's 1541 disk drive for a C64. This lets you store thousands of C64 disk images on a single SD card. Being opensource has allowed anyone to design and built devices. My favourite variant is the [SD2IEC+ from The Future was 8 Bit](https://www.thefuturewas8bit.com/shop/sd2iec-c.html).
I like both the C64c style look of the device and the fact you can chose how the unit is powered e.g. usb, C64 tape port.

{{< figure src="/images/sd2iecplus.png" title="The Future was 8bit's excellent SD2IEC+" >}}

## Other Accesseries
With 3D printing, accessible electronics and a growing retro-tech community there are a vast array of other options and accessories. Listed below are some of the other resources that might be useful.

- [https://www.retroleum.co.uk/](https://www.retroleum.co.uk/) Here you'll find various new, unused old stock and salvaged retro computer components and peripherals, mainly for the ZX Spectrum and Commodore 64.
- [https://coolnovelties.co.uk/coolnovelties/48-commodore-c16-c64-c128-vic-20](https://coolnovelties.co.uk/coolnovelties) A range of cables, spare parts and accessories for the Commodore 16, 64 and 128 range of home computers. 
- [https://shop.pixelwizard.eu/en/](https://shop.pixelwizard.eu/en/) New Commodore C64C replacement case for your "outdated" C64C made from the original Commodore 64C case moulds. Useful if your C64 case is yellowed, torn, has nasty holes or do you just want to give it a new color.
- [https://ultimate64.com/Ultimate-64](Ultimate-64) This board is a hardware implementation (FPGA) of the entire C64! Has all the original connections as well as built in USB, Network and HDMI connections.
  



## Want a second opinnion?

Retro Recipes has put together a great video called "So You Bought a Commodore 64? Modern Guide for Retro Buyers" that explores these and other options.

{{< youtube kJhbl4_q5zs >}}


