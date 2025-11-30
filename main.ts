function createSprites () {
    BrownWall = sprites.create(assets.image`Brown Wall`, 0)
    Fire = sprites.create(assets.image`Fire`, 0)
    Crown = sprites.create(assets.image`Crown`, 0)
    BrownWallMini = sprites.create(assets.image`Brown Wall Mini`, 0)
}
let BrownWallMini: Sprite = null
let Crown: Sprite = null
let Fire: Sprite = null
let BrownWall: Sprite = null
scene.setBackgroundColor(15)
let Dave = sprites.create(assets.image`Dave Walk`, SpriteKind.Player)
controller.moveSprite(Dave, 100, 100)
tiles.setCurrentTilemap(tilemap`intro`)
