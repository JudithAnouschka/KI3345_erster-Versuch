const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Sprite,
		C3.Plugins.Shape3D,
		C3.Plugins.Particles,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{Klicken: 0},
	{Button: 0},
	{Sprite: 0},
	{Text: 0},
	{"3DForm": 0},
	{Partikel: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Text2: 0},
	{Sprite4: 0},
	{Button2: 0},
	{Button3: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Text3: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Text4: 0},
	{Button4: 0}
];

self.InstanceType = {
	Klicken: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	_3DForm: class extends self.I3DShapeInstance {},
	Partikel: class extends self.IParticlesInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Button2: class extends self.IButtonInstance {},
	Button3: class extends self.IButtonInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Text4: class extends self.ITextInstance {},
	Button4: class extends self.IButtonInstance {}
}