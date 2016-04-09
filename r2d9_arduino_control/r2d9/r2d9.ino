#include <Wire.h> 
#include <SPI.h>
#include "./lib/LiquidCrystal_I2C/LiquidCrystal_I2C.h"
#include <Adafruit_LEDBackpack.h>
#include <Adafruit_GFX.h>

LiquidCrystal_I2C lcd(0x27);

Adafruit_8x8matrix matrix_top = Adafruit_8x8matrix();
Adafruit_8x8matrix matrix_bottom = Adafruit_8x8matrix();

char inData[20]; // Allocate some space for the string
char inChar=-1; // Where to store the character read
byte index = 0; // Index into array; where to store the character
String value = "";

static const uint8_t PROGMEM
  smile_bmp[] =
  { B00111100,
    B01000010,
    B10100101,
    B10000001,
    B10100101,
    B10011001,
    B01000010,
    B00111100 },
  neutral_bmp[] =
  { B00111100,
    B01000010,
    B10100101,
    B10000001,
    B10111101,
    B10000001,
    B01000010,
    B00111100 };

void setup()
{
  Serial.begin(9600);
  
  matrix_top.begin(0x71);
  matrix_bottom.begin(0x72);
  
  lcd_init();
  led_display_init( matrix_top );
  led_display_init( matrix_bottom );
}


void loop()
{
  value = waitAndRead();
  if(value.compareTo("leddisplay") == 0) {
      value = waitAndRead();
      if(value.compareTo("smile") == 0) {
        led_display_draw(matrix_top, smile_bmp);
        led_display_draw(matrix_bottom, smile_bmp);
      } else if(value.compareTo("neutral") == 0) {
        led_display_draw(matrix_top, neutral_bmp);
        led_display_draw(matrix_bottom, neutral_bmp);
      }
  } else if(value.compareTo("lcddisplay") == 0) {
       Serial.println("command found");
  }
}

String waitAndRead() 
{
   while(Serial.available() == 0) { }
   return Serial.readString();
}

void led_display_draw(Adafruit_8x8matrix matrix, const uint8_t *gfx) {
  matrix.clear();
  matrix.drawBitmap(0, 0, gfx, 8, 8, LED_ON);
  matrix.writeDisplay();
}

void led_display_init(Adafruit_8x8matrix matrix) {
  matrix.clear();      // clear display
  matrix.drawRect(0,0, 8,8, LED_ON);
  matrix.fillRect(2,2, 4,4, LED_ON);
  matrix.writeDisplay();  // write the changes we just made to the display
}

void lcd_init()
{
  lcd.begin(16,2);
  lcd.home ();
  lcd.print("   == R2D9 ==");  
  lcd.setCursor ( 0, 1 );
  lcd.print("Astromech Droide"); 
  lcd.home();
  lcd.blink();
}

