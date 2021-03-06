scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ....................fffffffffffffffffff...........
    ...................f999999999999999999ff..........
    ..................ff9999999999999999999ff.........
    .................fff99999999999999999999ff........
    .................f99999999999999999999999f........
    .................f99999999999999999999999f........
    ................ff99999999999999999999999f........
    .......ffffffffff999999999999999999999999f........
    .......f9999999f999999999999ffffffffffffff........
    .......f9999999f999999999999f666666666666fff......
    .......f9999999f99999999999ff6666666666666ff......
    .......f9999999f99999999999f666666666666666f......
    .......f9999999f99999999999f666666666111166f......
    .......f9999999f99999999999f666666661666666f......
    .......f9999999f99999999999f666666666666666f......
    .......f9999999f99999999999f666666666666666f......
    .......f9999999f99999999999ff66666666666666f......
    .......f9999999f999999999999f66666666666666f......
    .......f9999999f999999999999f66666666666666f......
    .......f9999999f999999999999ff6666666666666f......
    .......f9999999f9999999999999f6666666666666f......
    .......f9999999f9999999999999fffffffffffffff......
    .......f9999999f999999999999999999999999f.........
    .......f9999999f999999999999999999999999f.........
    .......fff99999f999999999999999999999999f.........
    .........fffffff999999999999999999999999f.........
    ...............f999999999999999999999999f.........
    ...............f999999999999999999999999f.........
    ...............f99999999fffffffff9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............f99999999f.......f9999999f.........
    ...............ffffffffff.......fffffffff.........
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`1000100003000000000000000000000000010001010101010001010101010101000100010101010100010101000101010001000100000000000001010000000000000001000101000000010101010001010100010001010001000101010100000101000100010100010000000101000000000001000101000101010001010101000101010001000001010100000000000000000000010001000000000100010000010101000100010101010101000100000001010001000000000000000001010000000000010000010101010100010100010101000101000101000000000100000001010001010101000001010000000100000100000000000001010101010101010201`, img`
    . . . . . . . . . . . . . 2 . 2 
    2 2 2 2 . 2 2 2 2 2 2 2 . 2 . 2 
    2 2 2 2 . 2 2 2 . 2 2 2 . 2 . 2 
    . . . . . . 2 2 . . . . . . . 2 
    . 2 2 . . . 2 2 2 2 . 2 2 2 . 2 
    . 2 2 . 2 . 2 2 2 2 . . 2 2 . 2 
    . 2 2 . 2 . . . 2 2 . . . . . 2 
    . 2 2 . 2 2 2 . 2 2 2 2 . 2 2 2 
    . 2 . . 2 2 2 . . . . . . . . . 
    . 2 . 2 . . . . 2 . 2 . . 2 2 2 
    . 2 . 2 2 2 2 2 2 . 2 . . . 2 2 
    . 2 . . . . . . . . 2 2 . . . . 
    . 2 . . 2 2 2 2 2 . 2 2 . . . . 
    . 2 2 . 2 2 . . . . 2 . . . . . 
    . 2 2 2 2 . . 2 2 . . . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    `, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
