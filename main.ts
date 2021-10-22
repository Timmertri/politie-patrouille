DFRobotMaqueenPluss.I2CInit()
DFRobotMaqueenPluss.PID(PID.OFF)
music.setVolume(239)
basic.forever(function () {
    DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBL, Color.RED)
    basic.pause(500)
    DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBL, Color.PUT)
    DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBR, Color.BLUE)
    basic.pause(500)
    DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBR, Color.PUT)
})
basic.forever(function () {
    images.iconImage(IconNames.No).scrollImage(1, 200)
    music.playMelody("F C A F - - - - ", 145)
})
basic.forever(function () {
    if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 30)
    }
    if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 10)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 40)
    }
    if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 10)
    }
})
