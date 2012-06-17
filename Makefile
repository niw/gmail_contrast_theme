TARGET = extension.zip

all: $(TARGET)

clean:
	rm -r $(TARGET)

$(TARGET): manifest.json *.html *.js *.css
	zip $@ $^

.PHONY: all clean
