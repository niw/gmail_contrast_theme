TARGET = extension.zip

all: $(TARGET)

clean:
	rm -r $(TARGET)

$(TARGET): manifest.json *.html *.js *.css *.png
	zip $@ $^

.PHONY: all clean
